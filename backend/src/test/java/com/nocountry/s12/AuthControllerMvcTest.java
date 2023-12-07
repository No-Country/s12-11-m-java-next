package com.nocountry.s12;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.nocountry.s12.Dto.Request.LoginDto;
import jakarta.servlet.http.HttpServletResponse;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class AuthControllerMvcTest {

  @Autowired
  private MockMvc mockMvc;

  private JacksonTester<LoginDto> loginDtoJacksonTester;

  @BeforeEach
  void setUp() {
    JacksonTester.initFields(this, new ObjectMapper());
  }

  @Test
  void name() throws Exception {
    LoginDto loginDto = new LoginDto("faviofz1@gmail.com","Faviofz8+");

    MockHttpServletResponse response = mockMvc.perform(
            post("/auth/login").accept(MediaType.APPLICATION_JSON).contentType(MediaType.APPLICATION_JSON)
                .content(loginDtoJacksonTester.write(loginDto).getJson())).andReturn()
        .getResponse();

    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertFalse(response.getContentAsString().isEmpty());
  }
}
