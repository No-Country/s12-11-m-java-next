package com.nocountry.s12.ServiceImpl;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.Exception.UserNotExistException;
import com.nocountry.s12.Repository.PublicacionRepository;
import com.nocountry.s12.Service.PublicacionService;
import com.nocountry.s12.models.Publicacion;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PublicacionServiceImpl implements PublicacionService {

    @Autowired
    private PublicacionRepository publicacionRepository;


    @Override
    public List<PublicacionResponseDTO> getPublicaciones() {

        List<Publicacion> publicaciones = publicacionRepository.findAll();
        List<PublicacionResponseDTO> listaPublicacionDto = new ArrayList<>();

        for (Publicacion publicacion : publicaciones) {
            PublicacionResponseDTO dto = new PublicacionResponseDTO(publicacion);
            listaPublicacionDto.add(dto);
        }

        return listaPublicacionDto;
    }

    @Override
    @Transactional
    public List<PublicacionResponseDTO> getPublicacionesPorUsuario(String username) {
        Optional<List<Publicacion>> publicaciones = publicacionRepository.findByUsername(username);

        if (publicaciones.isPresent()) {
            List<Publicacion> listaPublicacion = publicaciones.get();

            if (!listaPublicacion.isEmpty()) {
                return listaPublicacion.stream()
                        .map(PublicacionResponseDTO::new)
                        .collect(Collectors.toList());
            } else {
                throw new EntityNotFoundException("El usuario no tiene publicaciones");
            }

        } else {
            throw new UserNotExistException();
        }
    }


    @Override
    @Transactional
    public PublicacionResponseDTO getPublicacionPorId(Long idPublicacion) {
        Publicacion publicacion = publicacionRepository.findById(idPublicacion)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró la publicación con ID: " + idPublicacion));
        // excepcion personalizada?

        return new PublicacionResponseDTO(publicacion);
    }

    @Override
    @Transactional
    public PublicacionResponseDTO crearPublicacion(PublicacionRequestDTO publicacionRequestDTO, String username) {

        //Usuario usuario = artistaService.getByUsername(username);

        Publicacion publicacion = new Publicacion();
        //publicacion.setUsuario(usuario);
        publicacion.setMensaje(publicacionRequestDTO.mensaje());
        publicacion.setFechaCreacion(LocalDate.now());
        //publicacion.setImagen(publicacionRequestDTO.imagen());

        publicacionRepository.save(publicacion);

       return new PublicacionResponseDTO(publicacion);
    }

    @Override
    @Transactional
    public Publicacion editarPublicacion(Long idPublicacion, PublicacionRequestDTO publicacionRequestDTO) {


        Publicacion publicacion = publicacionRepository.findById(idPublicacion)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró la publicación con ID: " + idPublicacion));
        /*
        if (!publicacion.getIdUsuario().equals(usuarioAutenticado.getId())) {
            throw new UnauthorizedAccessException();
        }

        publicacion.setMensaje(publicacionRequestDTO.getMensaje());
        publicacion.setImagen(publicacionRequestDTO.getImagen());

         */

        return publicacionRepository.save(publicacion);
    }

    @Override
    @Transactional
    public boolean eliminarPublicacion(Long idPublicacion) {

        Publicacion publicacion = publicacionRepository.findById(idPublicacion)
                .orElseThrow(() -> new EntityNotFoundException("No se encontró la publicación con ID: " + idPublicacion));
        /*
        if (!publicacion.getUsuario().equals(usuarioAutenticado)) {
            throw new UnauthorizedAccessException();
        }
         */

        publicacionRepository.delete(publicacion);
        return true;
    }

}

