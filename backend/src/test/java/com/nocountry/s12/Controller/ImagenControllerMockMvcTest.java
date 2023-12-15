package com.nocountry.s12.Controller;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.anyOf;
import static org.hamcrest.Matchers.is;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willDoNothing;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import com.nocountry.s12.Jwt.JwtService;
import com.nocountry.s12.Service.CloudinaryService;
import com.nocountry.s12.Service.ImagenService;
import com.nocountry.s12.models.Cancion;
import com.nocountry.s12.models.Imagen;
import java.awt.image.BufferedImage;
import java.io.File;
import java.nio.file.Files;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import javax.imageio.ImageIO;
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
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.ResourceUtils;

@AutoConfigureJsonTesters
@WebMvcTest(ImagenController.class)
@AutoConfigureMockMvc(addFilters = false)
class ImagenControllerMockMvcTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private CloudinaryService cloudinaryService;
  @MockBean
  private ImagenService imagenService;
  @MockBean
  private JwtService jwtService;
  @Autowired
  private JacksonTester<Imagen> imagenJacksonTester;
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
  void canRetrieveImageById() throws Exception {
    Imagen imagen = new Imagen(1L, "Nombre", "Url", "Cloudinary Id",
        new Cancion());
    //given
    given(imagenService.getImagen(1L)).willReturn(Optional.of(imagen));

    //when
    MockHttpServletResponse response = mockMvc.perform(
            get("/imagen/1").accept(MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(imagenJacksonTester.write(imagen).getJson(),
        response.getContentAsString());
  }

  @Test
  void canUploadImage() throws Exception {
    File imageFile = ResourceUtils.getFile("classpath:images/cat.bmp");
    byte[] imageBytes = Files.readAllBytes(imageFile.toPath());

    //El nombre del atributo name del objeto de la clase MockMultipartFile debe coincidir
    //con el nombre del parametro recibido en el controlador.
    MockMultipartFile mockMultipartFile = new MockMultipartFile("imagen",
        imageFile.getName(),
        MediaType.MULTIPART_FORM_DATA_VALUE, imageBytes);

    Imagen imagen = new Imagen(1L, "MyImageFile", "Url",
        "Cloudinary Id",
        new Cancion());

    //given
    given(imagenService.save(mockMultipartFile)).willReturn(imagen);

    //when
    MockHttpServletResponse response = mockMvc.perform(
            multipart("/imagen")
                .file(mockMultipartFile)
                .contentType(MediaType.MULTIPART_FORM_DATA_VALUE)
                .accept(MediaType.APPLICATION_JSON)
        ).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(imagenJacksonTester.write(imagen).getJson(),
        response.getContentAsString());
  }

  @Test
  void canDeleteImageById() throws Exception {
    Imagen imagen = new Imagen(1L, "Nombre", "Url", "Cloudinary Id",
        new Cancion());

    //given
    given(cloudinaryService.delete(imagen.getCloudinaryId())).willReturn(
        Map.of());
    willDoNothing().given(imagenService).delete(imagen.getId());

    //when
    MockHttpServletResponse response = mockMvc.perform(
            delete("/imagen/1").accept(MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertThat(response.getStatus(), anyOf(is(HttpStatus.ACCEPTED.value()),
        is(HttpStatus.NO_CONTENT.value())));
  }
}