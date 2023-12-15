package com.nocountry.s12.Dto.Request;

import com.nocountry.s12.models.Imagen;
import com.nocountry.s12.models.Publicacion;
import org.springframework.web.multipart.MultipartFile;

public record PublicacionRequestDTO(
        String mensaje,
        MultipartFile imagen
) {
    public PublicacionRequestDTO(Publicacion publicacion){
        this(publicacion.getMensaje(), (MultipartFile) publicacion.getImagen());
    }
}
