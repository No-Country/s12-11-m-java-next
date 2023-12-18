package com.nocountry.s12.Dto.Response;

import com.nocountry.s12.models.Cancion;
import java.util.List;

public record MusicResponseDto(Long id, String titulo, String genero, String fechaSubida, List<String> imagenes,
		String audioUrl, Long albumId) {

	//constructor
	public MusicResponseDto(Cancion cancion) {
		this(cancion.getId(), cancion.getTitulo(), cancion.getGenero(), cancion.getFechaSubida().toString(),
				cancion.getImagenes(), cancion.getUrlCancion(), cancion.getAlbum().getId());
	}

}
