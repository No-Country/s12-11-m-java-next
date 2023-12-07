package com.nocountry.s12.Controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.nocountry.s12.Service.ArtistaService;
import com.nocountry.s12.models.Artista;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/Artista")
@RequiredArgsConstructor
public class ArtistaController {

    private final ArtistaService artistaService;
	
    @GetMapping("/listarTodos")
    public ResponseEntity<List<Artista>> listarTodos(){
        List<Artista> listaArtistas = artistaService.listarTodos();
        try {
            if(listaArtistas.isEmpty()){
                return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
            }
            return ResponseEntity.ok(listaArtistas);
        }catch (ResponseStatusException e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
	
    @PatchMapping("/baja")
    public ResponseEntity<?> bajaArtista(@RequestParam Integer id){
        try {
        	artistaService.bajaArtista(id);
            return ResponseEntity.ok("Artista dado de baja con éxito");
        } catch (RuntimeException e) {
            return new ResponseEntity(e.getMessage(), HttpStatus.BAD_REQUEST);
        }

    }
}
