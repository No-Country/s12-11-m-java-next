package com.nocountry.s12.Service;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.models.Publicacion;

import java.util.List;

public interface PublicacionService {

    List<PublicacionResponseDTO> getPublicaciones();
    List<PublicacionResponseDTO> getPublicacionesPorUsuario(String username);
    PublicacionResponseDTO getPublicacionPorId(Long idPublicacion);
    PublicacionResponseDTO crearPublicacion(PublicacionRequestDTO publicacionRequestDTO, String username);
    Publicacion editarPublicacion(Long idPublicacion, PublicacionRequestDTO publicacionRequestDTO);
    boolean eliminarPublicacion(Long idPublicacion);

}
