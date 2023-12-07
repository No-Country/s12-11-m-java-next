package com.nocountry.s12;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.nocountry.s12.Auth.AuthController;
import com.nocountry.s12.Dto.Request.LoginDto;
import com.nocountry.s12.Dto.Response.AuthResponse;
import com.nocountry.s12.Repository.UsuarioRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit.jupiter.SpringExtension;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class AuthControllerRestTemplateIntegrationTest {

  @LocalServerPort
  private int port;
  @Autowired
  private TestRestTemplate testRestTemplate;

  HttpHeaders httpHeaders = new HttpHeaders();

  String url = "http://localhost:";

  @Test
  void name() throws Exception {
    LoginDto loginDto = new LoginDto("faviofz@gmail.com", "123456");
    AuthResponse authResponse = new AuthResponse("token");

    HttpEntity<AuthResponse> responseHttpEntity = new HttpEntity<AuthResponse>(authResponse,
        httpHeaders);

    AuthResponse response = testRestTemplate.getForObject(url + port + "/auth/login", AuthResponse.class);

    assertEquals(HttpStatus.OK.value(), response);
  }
}
