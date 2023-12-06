package com.nocountry.s12.Controller;

import static org.hamcrest.Matchers.hasSize;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.nocountry.s12.Service.EventoService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;


@WebMvcTest(controllers = EventoController.class)
class EventoControllerTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private EventoService eventoService;

  @Autowired
  private EventoController eventoController;

  @Test
  void contextLoads() {
    assertNotEquals(mockMvc, null);
    assertNotEquals(eventoService, null);
    assertNotEquals(eventoController, null);
  }

  @Test
  public void givenEmployees_whenGetEmployees_thenReturnJsonArray()
      throws Exception {

    mockMvc.perform(get("/evento").contentType(MediaType.APPLICATION_JSON))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$", hasSize(1)));
  }
}