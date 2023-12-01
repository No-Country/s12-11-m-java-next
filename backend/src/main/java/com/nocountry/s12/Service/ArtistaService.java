package com.nocountry.s12.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nocountry.s12.Exception.UserNotExistException;
import com.nocountry.s12.Repository.ArtistaRepository;
import com.nocountry.s12.models.Artista;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ArtistaService {
	
    private final ArtistaRepository artistaRepository;
	
	public List<Artista> listarTodos() {
        List<Artista> listaArtistas = artistaRepository.findAll();
   // mapstruct para pasar a dto
        return listaArtistas;
	}   
	
    
    
    public void bajaArtista(Integer id){
        Optional<Artista> artistaOptional = artistaRepository.findById(id);

        if (!artistaOptional.isPresent()) {
            throw new UserNotExistException();
        }
        Artista artista = artistaOptional.get();
        artista.setAlta(false);
        artistaRepository.save(artista);
    }

}
