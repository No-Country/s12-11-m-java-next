package com.nocountry.s12.Dto.Response;

import com.nocountry.s12.models.Cancion;
import java.util.List;

import com.nocountry.s12.models.Imagen;
import java.time.LocalDate;

public record MusicResponseDto(
		 Long id,
	     String titulo,
	     String genero,
	     LocalDate fechaSubida,
	     List<Imagen> img,
	     String audioUrl,
	     Long albumId){
    
    public MusicResponseDto(Cancion cancion){
        this(cancion.getId(), cancion.getTitulo(), cancion.getGenero(), cancion.getFechaSubida(), cancion.getImgMusic(), cancion.getUrlCancion(), cancion.getAlbum().getId());
    }
    
}
