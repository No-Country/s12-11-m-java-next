package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;

import com.nocountry.s12.Dto.Response.MusicResponseDto;
import com.nocountry.s12.Jwt.JwtService;
import com.nocountry.s12.ServiceImpl.MusicServiceImpl;
import java.io.File;
import java.nio.file.Files;
import java.time.LocalDate;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.ResourceUtils;

@AutoConfigureJsonTesters
@WebMvcTest(MusicController.class)
@AutoConfigureMockMvc(addFilters = false)
class MusicControllerMockMvcTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private MusicServiceImpl musicService;
  @MockBean
  private JwtService jwtService;
  @Autowired
  private JacksonTester<MusicResponseDto> musicJacksonTester;
  @Autowired
  private JacksonTester<List<MusicResponseDto>> musicListJacksonTester;

  @Test
  void canRetrieveAllCanciones() throws Exception {
    List<MusicResponseDto> musicResponseDtos = List.of(
        new MusicResponseDto(1L, "Titulo1", "Genero1",
            LocalDate.now().toString(), List.of(), "AudioUrl", 1L),
        new MusicResponseDto(2L, "Titulo2", "Genero2",
            LocalDate.now().toString(), List.of(), "AudioUrl", 2L));
    //given
    given(musicService.listarAlll()).willReturn(musicResponseDtos);

    //when
    MockHttpServletResponse response = mockMvc.perform(get("/music").accept(
            MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(musicListJacksonTester.write(musicResponseDtos).getJson(),
        response.getContentAsString());
  }

  @Test
  void canRetrieveCancionByName() throws Exception {
    String requestFileName = "cat";
    File imageFile = ResourceUtils.getFile(
        "classpath:images/cat.bmp");
    Resource resource = new FileSystemResource(imageFile);
    byte[] imageBytes = Files.readAllBytes(imageFile.toPath());

    HttpHeaders headers = new HttpHeaders();
    headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
    headers.setContentLength(resource.contentLength());
    headers.setContentDisposition(ContentDisposition.parse(
        "attachment; filename=" + imageFile.getName()));

    //given
    given(musicService.obtenerCancionByName(requestFileName)).willReturn(
        new ResponseEntity<>(resource, headers, HttpStatus.OK));

    //when
    MockHttpServletResponse response = mockMvc.perform(
            get("/music/{fileName}", requestFileName).accept(
                MediaType.APPLICATION_OCTET_STREAM))
        .andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals("attachment; filename=\"" + requestFileName + ".bmp" + "\"",
        response.getHeader(
            HttpHeaders.CONTENT_DISPOSITION));
    assertEquals(imageBytes.length, response.getContentAsByteArray().length);
    assertTrue(response.getOutputStream().isReady());
  }

  @Test
  void canSaveCancion() throws Exception {
    MockMultipartFile mockAudioMultipartFile = new MockMultipartFile(
        "audio",
        "image.png",
        MediaType.MULTIPART_FORM_DATA_VALUE, "MockAudio".getBytes()),
        mockImageMultipartFile = new MockMultipartFile(
            "img",
            "image.png",
            MediaType.MULTIPART_FORM_DATA_VALUE, "MockImage".getBytes());

    String titulo = "Titulo", genero = "Genero", fechaSubida = LocalDate.now()
        .toString(), albumId = "1";

    LinkedMultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
    requestParams.add("titulo", titulo);
    requestParams.add("genero", genero);
    requestParams.add("fechaSubida", fechaSubida);
    requestParams.add("albumId", albumId);

    MusicResponseDto musicResponseDto = new MusicResponseDto(1L, "Titulo",
        "Genero",
        LocalDate.now().toString(), List.of(), "AudioUrl", 1L);

    //given
    given(musicService.guardarMusica(mockAudioMultipartFile,
        mockImageMultipartFile, titulo, genero, fechaSubida,
        albumId)).willReturn(musicResponseDto);

    //when
    MockHttpServletResponse response = mockMvc.perform(
            multipart("/music")
                .file(mockAudioMultipartFile)
                .file(mockImageMultipartFile)
                .params(requestParams)
                .contentType(MediaType.MULTIPART_FORM_DATA)
                .accept(MediaType.APPLICATION_JSON)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    assertEquals(musicJacksonTester.write(musicResponseDto).getJson(),
        response.getContentAsString());
  }
}