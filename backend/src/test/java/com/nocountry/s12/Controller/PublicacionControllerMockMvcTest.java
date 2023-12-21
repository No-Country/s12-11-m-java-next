package com.nocountry.s12.Controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.anyOf;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.Dto.Response.UsuarioPublicacionResponseDTO;
import com.nocountry.s12.Jwt.JwtService;
import com.nocountry.s12.Service.PublicacionService;
import com.nocountry.s12.models.Imagen;
import com.nocountry.s12.models.Publicacion;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

@AutoConfigureJsonTesters
@WebMvcTest(PublicacionController.class)
@AutoConfigureMockMvc(addFilters = false)
class PublicacionControllerMockMvcTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private PublicacionService publicacionService;
  @MockBean
  private JwtService jwtService;
  @Autowired
  private JacksonTester<PublicacionResponseDTO> publicacionResponseDTOJacksonTester;
  @Autowired
  private JacksonTester<List<PublicacionResponseDTO>> publicacionResponseDTOListJacksonTester;
  @Autowired
  private JacksonTester<PublicacionRequestDTO> publicacionRequestDTOJacksonTester;

  @Test
  void canRetrieveAllPublicaciones() throws Exception {
    List<PublicacionResponseDTO> publicacionResponseDTOS = List.of(
        new PublicacionResponseDTO(1L, "Mensaje1", LocalDate.now(),
            new Imagen(),
            new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen())),
        new PublicacionResponseDTO(2L, "Mensaje2", LocalDate.now(),
            new Imagen(),
            new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen())));

    //given
    given(publicacionService.getPublicaciones()).willReturn(
        publicacionResponseDTOS);

    //when
    MockHttpServletResponse response =
        mockMvc.perform(get("/publicacion").accept(MediaType.APPLICATION_JSON))
            .andReturn()
            .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(
        publicacionResponseDTOListJacksonTester.write(publicacionResponseDTOS)
            .getJson(), response.getContentAsString());
  }

  @Test
  void canRetrievePublicacionesByUserId() throws Exception {
    List<PublicacionResponseDTO> publicacionResponseDTOS = List.of(
        new PublicacionResponseDTO(1L, "Mensaje1", LocalDate.now(),
            new Imagen(),
            new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen())),
        new PublicacionResponseDTO(2L, "Mensaje2", LocalDate.now(),
            new Imagen(),
            new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen())));

    //given
    given(publicacionService.getPublicacionesPorUsuario(1L)).willReturn(
        publicacionResponseDTOS);

    //when
    MockHttpServletResponse response = mockMvc.perform(get("/publicaciones"
            + "/usuario/1").accept(MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(
        publicacionResponseDTOListJacksonTester.write(publicacionResponseDTOS)
            .getJson(), response.getContentAsString());
  }

  @Test
  void canRetrievePublicacionById() throws Exception {
    PublicacionResponseDTO publicacionResponseDTO = new PublicacionResponseDTO(
        1L, "Mensaje1", LocalDate.now(),
        new Imagen(),
        new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen()));

    //given
    given(publicacionService.getPublicacionPorId(1L)).willReturn(
        publicacionResponseDTO);

    //when
    MockHttpServletResponse response =
        mockMvc.perform(
                get("/publicacion/1").accept(MediaType.APPLICATION_JSON))
            .andReturn()
            .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(
        publicacionResponseDTOJacksonTester.write(publicacionResponseDTO)
            .getJson(), response.getContentAsString());
  }

  @Test
  void crearPublicacion() throws Exception {
    PublicacionRequestDTO publicacionRequestDTO = new PublicacionRequestDTO(
        "Mensaje1");

//    PublicacionResponseDTO publicacionResponseDTO = new PublicacionResponseDTO(
//        1L, "Mensaje1", LocalDate.now(),
//        new Imagen(),
//        new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen()));

    //given
    given(
        publicacionService.crearPublicacion(publicacionRequestDTO)).willReturn(
        new Publicacion());//Falta completar por falta de implementacion en
    // la clase PublicacionController

    //when
    MockHttpServletResponse response =
        mockMvc.perform(post("/publicacion")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON)
                .content(
                    publicacionRequestDTOJacksonTester.write(publicacionRequestDTO)
                        .getJson())).andReturn()
            .getResponse();

    //then
    assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    //Falta realizar assertions sobre la respuesta
  }

  @Test
  void canUpdatePublicacionById() throws Exception {
    PublicacionRequestDTO publicacionRequestDTO = new PublicacionRequestDTO(
        "Mensaje1");

    PublicacionResponseDTO publicacionResponseDTO = new PublicacionResponseDTO(
        1L, "Mensaje1", LocalDate.now(),
        new Imagen(),
        new UsuarioPublicacionResponseDTO(1L, "FavioFz", new Imagen()));

    //given
    given(publicacionService.editarPublicacion(1L,
        publicacionRequestDTO)).willReturn(new Publicacion());

    //when
    MockHttpServletResponse response = mockMvc.perform(put("/publicacion/1")
            .accept(MediaType.APPLICATION_JSON)
            .contentType(MediaType.APPLICATION_JSON)
            .content(publicacionRequestDTOJacksonTester.write(publicacionRequestDTO)
                .getJson())).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.ACCEPTED.value(), response.getStatus());
    //Falta realizar assertions sobre la respuesta
  }

  @Test
  void canDeletePublicacionById() throws Exception {

    //given
    given(publicacionService.eliminarPublicacion(1L)).willReturn(true);

    //when
    MockHttpServletResponse response =
        mockMvc.perform(delete("/publicacion/1").accept(
                MediaType.APPLICATION_JSON)).andReturn()
            .getResponse();

    //then
    assertThat(response.getStatus(), anyOf(is(HttpStatus.ACCEPTED.value()),
        is(HttpStatus.NO_CONTENT.value())));
  }
}