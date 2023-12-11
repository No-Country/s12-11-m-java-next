package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.patch;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.nocountry.s12.Service.ArtistaService;
import com.nocountry.s12.models.Artista;
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
class ArtistaControllerStandaloneTest {

  private MockMvc mockMvc;

  @Mock
  private ArtistaService artistaService;

  @InjectMocks
  private ArtistaController artistaController;

  private JacksonTester<Artista> artistaJacksonTester;
  private JacksonTester<List<Artista>> artistaListJacksonTester;

  @BeforeEach
  void setUp() {
    JacksonTester.initFields(this, new ObjectMapper().registerModule(new JavaTimeModule()));

    mockMvc = MockMvcBuilders.standaloneSetup(artistaController).build();
  }

  @Test
  void canRetrieveAllArtistas() throws Exception {
    List<Artista> artistas = List.of(new Artista(), new Artista());
    //given
    given(artistaService.listarTodos()).willReturn(artistas);

    //when
    MockHttpServletResponse response = mockMvc.perform(
        get("/Artista/listarTodos")).andReturn().getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(artistaListJacksonTester.write(artistas).getJson(), response.getContentAsString());
  }

  @Test
  void canSoftDeleteAnArtist() throws Exception {
    //when
    MockHttpServletResponse response = mockMvc.perform(patch("/Artista/baja?id=1")).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
  }
}