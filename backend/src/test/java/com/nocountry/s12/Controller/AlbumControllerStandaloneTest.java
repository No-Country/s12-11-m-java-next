package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nocountry.s12.Dto.Request.AlbumRequestDTO;
import com.nocountry.s12.Dto.Response.AlbumResponseDTO;
import com.nocountry.s12.Exception.GlobalExceptionHandler;
import com.nocountry.s12.Service.AlbumServiceImpl;
import jakarta.persistence.EntityNotFoundException;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;


@ExtendWith(MockitoExtension.class)
public class AlbumControllerStandaloneTest {

  private MockMvc mockMvc;

  @Mock
  private AlbumServiceImpl albumService;

  @InjectMocks
  private AlbumController albumController;

  private JacksonTester<AlbumResponseDTO> responseDTOJacksonTester;

  private JacksonTester<AlbumRequestDTO> requestDTOJacksonTester;

  @BeforeEach
  public void setUp() {
    JacksonTester.initFields(this, new ObjectMapper().registerModule(new JavaTimeModule()));

    mockMvc = MockMvcBuilders.standaloneSetup(albumController)
        .setControllerAdvice(new GlobalExceptionHandler()).build();
  }

  @Test
  void canRetrieveAllAlbum() throws Exception {
    List<AlbumResponseDTO> dtoList = List.of(
        new AlbumResponseDTO(1L, "Rock", LocalDate.now(), List.of()),
        new AlbumResponseDTO(2L, "Pop", LocalDate.now(), List.of()),
        new AlbumResponseDTO(3L, "Internacional", LocalDate.now(), List.of()));

    //given
    given(albumService.listar()).willReturn(dtoList);

    //when
    MockHttpServletResponse response = mockMvc.perform(
        get("/album").accept(MediaType.APPLICATION_JSON)).andReturn().getResponse();

    //then
    assertEquals(response.getStatus(), HttpStatus.OK.value());
    assertFalse(response.getContentAsString().isBlank());
  }

  @Test
  void canRetrieveAlbumByIdWhenExist() throws Exception {
    AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(1L, "Rock", LocalDate.now(),
        List.of());

    //given
    given(albumService.obtenerPorID(1L)).willReturn(albumResponseDTO);

    //when
    MockHttpServletResponse response = mockMvc.perform(
        get("/album/1").accept(MediaType.APPLICATION_JSON)).andReturn().getResponse();

    //then
    assertEquals(response.getStatus(), HttpStatus.OK.value());
    assertEquals(response.getContentAsString(),
        responseDTOJacksonTester.write(albumResponseDTO).getJson());
  }

  @Test
  void canRetrieveAlbumByIdWhenDoesNotExist() throws Exception {
    //given
    given(albumService.obtenerPorID(1L)).willThrow(
        new EntityNotFoundException("Entidad no encontrada")); //Replace with custom exception

    //when
    MockHttpServletResponse response = mockMvc.perform(
        get("/album/1").accept(MediaType.APPLICATION_JSON)).andReturn().getResponse();

    //then
    assertEquals(response.getStatus(), HttpStatus.NOT_FOUND.value());
    assertTrue(response.getContentAsString().isEmpty());
  }

  @Test
  void canCreateANewAlbum() throws Exception {
    AlbumRequestDTO albumRequestDTO = new AlbumRequestDTO("Rock", LocalDate.now().toString(),
        List.of(), "ArtistName");

    //when
    MockHttpServletResponse response = mockMvc.perform(
            post("/album").contentType(MediaType.APPLICATION_JSON)
                .content(requestDTOJacksonTester.write(albumRequestDTO).getJson())).andReturn()
        .getResponse();

    //then
    assertEquals(response.getStatus(), HttpStatus.CREATED.value());
  }

  @Test
  void canModifyAnAlbum() throws Exception {
    AlbumRequestDTO albumRequestDTO = new AlbumRequestDTO("Pop", LocalDate.now().toString(),
        List.of(), "ArtistName");
    AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(1L, "Pop", LocalDate.now(),
        List.of());

    //given
    given(albumService.modificar(1L, albumRequestDTO)).willReturn(albumResponseDTO);

    //when
    MockHttpServletResponse response = mockMvc.perform(
            put("/album/1").accept(MediaType.APPLICATION_JSON)
                .content(requestDTOJacksonTester.write(albumRequestDTO).getJson())).andReturn()
        .getResponse();

    //then
    assertEquals(response.getStatus(),HttpStatus.OK.value());
    assertEquals(response.getContentAsString(),responseDTOJacksonTester.write(albumResponseDTO).getJson());
  }
}
