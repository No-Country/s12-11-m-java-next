package com.nocountry.s12.Service;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;

import java.io.IOException;
import java.util.List;

public interface PublicacionService {

    List<PublicacionResponseDTO> getPublicaciones();
    List<PublicacionResponseDTO> getPublicacionesPorUsuario(String username);
    PublicacionResponseDTO getPublicacionPorId(Long idPublicacion);
    PublicacionResponseDTO crearPublicacion(PublicacionRequestDTO publicacionRequestDTO, String username) throws IOException;
    PublicacionResponseDTO editarPublicacion(Long idPublicacion, PublicacionRequestDTO publicacionRequestDTO, String username) throws IOException;
    void eliminarPublicacion(Long idPublicacion, String username);

}
