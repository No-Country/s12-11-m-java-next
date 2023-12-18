/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.ServiceImpl;

import com.nocountry.s12.Dto.Request.AlbumRequestDTO;
import com.nocountry.s12.Dto.Response.AlbumResponseDTO;
import com.nocountry.s12.Exception.MiException;
import com.nocountry.s12.Repository.AlbumRepository;
import com.nocountry.s12.Service.AlbumService;
import com.nocountry.s12.Service.ArtistaService;
import com.nocountry.s12.models.Album;
import com.nocountry.s12.models.Artista;
import com.nocountry.s12.models.Imagen;
import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author Admin
 */
@Service
@RequiredArgsConstructor
public class AlbumServiceImpl implements AlbumService {

    private final AlbumRepository albumRepository;
    private final ArtistaService artistaService;
    private final ImagenService imagenService;
    
    @Override
    public List<AlbumResponseDTO> listar() {
        List<Album> listaAlbum = albumRepository.findAll();
        List<AlbumResponseDTO> listaAlbumDTO = listaAlbum.stream()
                .map(AlbumResponseDTO::new).collect(Collectors.toList());
        return listaAlbumDTO;
    }

    @Override
    public AlbumResponseDTO obtenerPorID(Long id) {
        Album album = albumRepository.findById(id).get();
        AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(album);
        return albumResponseDTO;
    }

    @Override
    public AlbumResponseDTO crear(String usernameArtista, MultipartFile img ,String titulo, String genero, String fechaPublicacion) throws MiException {
        Album nuevoAlbum = new Album();

        try {
            LocalDate fechaPubli = validarFecha(fechaPublicacion);
            Artista artista = artistaService.getByUsername(usernameArtista);
            
            Imagen imgAlbum = imagenService.save(img);
            
            nuevoAlbum.setGenero(genero);
            nuevoAlbum.setFechaPublicacion(fechaPubli);
            nuevoAlbum.setTitulo(titulo);
            nuevoAlbum.setAlta(true);
            nuevoAlbum.setArtista(artista);
            nuevoAlbum.setImgAlbum(imgAlbum);

            albumRepository.save(nuevoAlbum);
        } catch (Exception e) {
            e.printStackTrace();
            throw new MiException(e.getMessage());
        }

        AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(nuevoAlbum);
        return albumResponseDTO;
    }
    
    @Override
    public AlbumResponseDTO modificar(Long id, AlbumRequestDTO albumDTO) throws MiException {
        Album albumModificado = albumRepository.findById(id).get();
        LocalDate fechaPublicacion = this.validarFecha(albumDTO.fechaPublicacion());
        albumModificado.setGenero(albumDTO.genero());
        albumModificado.setFechaPublicacion(fechaPublicacion);

        albumRepository.save(albumModificado);
        AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(albumModificado);
        return albumResponseDTO;
    }

    @Override
    public void eliminar(Long id) {
        albumRepository.deleteById(id);
    }

    @Override
    public AlbumResponseDTO baja(Long id) {
        Album album = albumRepository.findById(id).get();
        album.setAlta(false);
        albumRepository.save(album);

        AlbumResponseDTO albumResponseDTO = new AlbumResponseDTO(album);
        return albumResponseDTO;
    }

    public LocalDate validarFecha(String fecha) throws MiException {
        try {
            //Si la fecha que recibe es en formato corrrecto devuelve la fecha como localdate
            LocalDate fechaConvertida = LocalDate.parse(fecha);
            return fechaConvertida;

        } catch (DateTimeParseException e) {
            throw new MiException("El formato de fecha debe ser yyyy-MM-dd", HttpStatus.BAD_REQUEST);
        }
    }

    @Override
    public List<AlbumResponseDTO> listarPorArtista(String username) throws MiException{
        Optional<List<Album>> optionalAlbums = albumRepository.findByUsername(username);

        if (optionalAlbums.isPresent()) {
            List<Album> listaAlbum = optionalAlbums.get();

            if (!listaAlbum.isEmpty()) {
                List<AlbumResponseDTO> listaAlbumDTO = listaAlbum.stream()
                        .map(AlbumResponseDTO::new)
                        .collect(Collectors.toList());

                return listaAlbumDTO;
            } else {
               
                throw new MiException("El artista no tiene album", HttpStatus.OK);
            }
        } else {
            // Manejo si no se encuentra ningún álbum para el usuario.
            throw new MiException("El artista no fue encontrado", HttpStatus.BAD_REQUEST);
        }
    }


}
