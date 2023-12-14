package com.nocountry.s12.Controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import com.nocountry.s12.Dto.Response.MusicResponseDto;
import com.nocountry.s12.ServiceImpl.MusicServiceImpl;
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
@WebMvcTest(MusicController.class)
@AutoConfigureMockMvc(addFilters = false)
class MusicControllerMockMvcTest {

  @Autowired
  private MockMvc mockMvc;
  @MockBean
  private MusicServiceImpl musicService;
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
            MediaType.APPLICATION_ATOM_XML)).andReturn()
        .getResponse();

    //then
    assertEquals(HttpStatus.OK.value(), response.getStatus());
    assertEquals(musicListJacksonTester.write(musicResponseDtos).getJson(),
        response.getContentAsString());
  }

  @Test
  void canSaveCancion()throws Exception{

  }
}