package com.nocountry.s12.ServiceImpl;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.Exception.UnauthorizedAccessException;
import com.nocountry.s12.Exception.UserNotExistException;
import com.nocountry.s12.Repository.PublicacionRepository;
import com.nocountry.s12.Repository.UsuarioRepository;
import com.nocountry.s12.Service.ImagenService;
import com.nocountry.s12.Service.PublicacionService;
import com.nocountry.s12.models.Imagen;
import com.nocountry.s12.models.Publicacion;
import com.nocountry.s12.models.Usuario;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
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

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private ImagenService imagenService;

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

        return new PublicacionResponseDTO(publicacion);
    }

    @Override
    @Transactional
    public PublicacionResponseDTO crearPublicacion(PublicacionRequestDTO publicacionRequestDTO, String username) throws IOException {

        Optional<Usuario> usuario = usuarioRepository.findByUsername(username);
        Publicacion publicacion = new Publicacion();

        if (usuario.isPresent()) {
            publicacion.setUsuario(usuario.get());
            publicacion.setFechaCreacion(LocalDate.now());
            publicacion.setMensaje(publicacionRequestDTO.mensaje());

            if (publicacionRequestDTO.imagen() != null){
                Imagen imagen = imagenService.save(publicacionRequestDTO.imagen());
                publicacion.setImagen(imagen);
            }

            publicacionRepository.save(publicacion);
        }
        else {
            throw new UserNotExistException();
        }

       return new PublicacionResponseDTO(publicacion);
    }

    @Override
    @Transactional
    public PublicacionResponseDTO editarPublicacion(Long idPublicacion, PublicacionRequestDTO publicacionRequestDTO, String username) throws IOException {

        Optional<Usuario> usuario = usuarioRepository.findByUsername(username);
        Optional<Publicacion> publicacionOptional = publicacionRepository.findById(idPublicacion);

        if (usuario.isPresent() && publicacionOptional.isPresent()) {
            Publicacion publicacion = publicacionOptional.get();

            if (publicacion.getUsuario().equals(usuario.get())) {

                publicacion.setMensaje(publicacionRequestDTO.mensaje());

                if (publicacionRequestDTO.imagen() != null) {
                    Imagen imagen = imagenService.save(publicacionRequestDTO.imagen());
                    publicacion.setImagen(imagen);
                }

                publicacionRepository.save(publicacion);

                return new PublicacionResponseDTO(publicacion);
            } else {
                throw new UnauthorizedAccessException();
            }
        } else {
            throw new EntityNotFoundException("No se encontró la publicación con ID: " + idPublicacion);
        }
    }


    @Override
    @Transactional
    public void eliminarPublicacion(Long idPublicacion,  String username) {
        Optional<Usuario> usuario = usuarioRepository.findByUsername(username);
        Optional<Publicacion> publicacionOptional = publicacionRepository.findById(idPublicacion);

        if (usuario.isPresent() && publicacionOptional.isPresent()) {
            Publicacion publicacion = publicacionOptional.get();

            if (publicacion.getUsuario().equals(usuario.get())) {
                publicacionRepository.delete(publicacion);
            } else {
                throw new UnauthorizedAccessException();
            }
        } else {
            throw new EntityNotFoundException("No se encontró la publicación con ID: " + idPublicacion);
        }
    }

}

