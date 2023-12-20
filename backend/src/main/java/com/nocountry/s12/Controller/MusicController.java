package com.nocountry.s12.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.nocountry.s12.Dto.Response.MusicResponseDto;
import com.nocountry.s12.Exception.MiException;
import com.nocountry.s12.Service.IMusicService;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;

@RestController
@RequestMapping("/music")
@RequiredArgsConstructor
public class MusicController {

	private final IMusicService musicService;

	// registrar canción
	@PostMapping
	public ResponseEntity<?> saveCancion(@RequestParam("audio") MultipartFile audio,
										 @RequestParam("img") MultipartFile img, 
										 @RequestParam("titulo") String titulo,
										 @RequestParam("genero") String genero,
										 @RequestParam("fechaSubida") String fechaSubida,
										 @RequestParam("albumId") String albumId) {

		try {

			return ResponseEntity.ok(musicService.guardarMusica(audio, img, titulo, genero, fechaSubida, albumId));

		} catch (MiException m) {

			return new ResponseEntity<String>(m.getMensaje(), m.getStatus());

		} catch (Exception e) {

			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}

	// listar todo
	@GetMapping("/list")
	public ResponseEntity<List<MusicResponseDto>> getAllCancion() {

		return ResponseEntity.ok(musicService.listarAll());
	}

	// listar por nombre de canción
	@GetMapping("/artista/{nombreCancion}")
	public ResponseEntity<?> getCancion(@PathVariable String nombreCancion) {

		try {
			return musicService.obtenerCancionByName(nombreCancion);
		} catch (MiException e) {
			return ResponseEntity.badRequest().body(e.getMensaje());
		}
	}

	// trae todos las caciones del artista
	@GetMapping("/artista")
	public ResponseEntity<?> getAllcancionByArtista(@AuthenticationPrincipal UserDetails userDetails) {

		try {

			return new ResponseEntity<>(musicService.listarCancionesArtista(userDetails), HttpStatus.OK);

		} catch (MiException e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}
	
	
	// trae todos las caciones por genero 
		@GetMapping("/genero/{genero}")
		public ResponseEntity<?> getAllcancionByGenero(@PathVariable String genero) {

		return new ResponseEntity<>(musicService.generoAll(genero), HttpStatus.OK);
		}
}
