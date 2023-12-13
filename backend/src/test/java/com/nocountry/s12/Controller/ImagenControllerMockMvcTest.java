package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import com.nocountry.s12.Service.CloudinaryService;
import com.nocountry.s12.Service.ImagenService;
import com.nocountry.s12.models.Imagen;
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
@WebMvcTest(ImagenController.class)
@AutoConfigureMockMvc(addFilters = false)
class ImagenControllerMockMvcTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  CloudinaryService cloudinaryService;
  @MockBean
  ImagenService imagenService;
  @Autowired
  private JacksonTester<List<Imagen>> imagenListJacksonTester;

  @Test
  void canRetrieveAllImages() throws Exception {
    List<Imagen> imagenList = List.of(new Imagen(), new Imagen(), new Imagen());
    //given
    given(imagenService.list()).willReturn(imagenList);

    //when
    MockHttpServletResponse response = mockMvc.perform(
            get("/imagen").accept(MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(imagenListJacksonTester.write(imagenList).getJson(),
        response.getContentAsString());
  }

  @Test
  void getImagen() {
  }

  @Test
  void upload() {
  }

  @Test
  void delete() {
  }
}