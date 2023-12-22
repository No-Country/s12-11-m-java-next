package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.*;

import com.nocountry.s12.Service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@AutoConfigureJsonTesters
@WebMvcTest(UsuarioController.class)
@AutoConfigureMockMvc(addFilters = false)
class UsuarioControllerMockMvcTest {
  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private ImagenService imagenService;
}