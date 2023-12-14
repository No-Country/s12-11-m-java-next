package com.nocountry.s12.Controller;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.Exception.UserNotExistException;
import com.nocountry.s12.Service.PublicacionService;
import com.nocountry.s12.models.Publicacion;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/publicacion")
public class PublicacionController {

    @Autowired
    private PublicacionService publicacionService;

    @GetMapping
    public ResponseEntity<List<PublicacionResponseDTO>> getPublicaciones(){
        List<PublicacionResponseDTO> publicaciones = publicacionService.getPublicaciones();
        return ResponseEntity.ok(publicaciones);
    }

    @GetMapping("/usuario_posts")
    public ResponseEntity<?> getPublicacionesPorUsuario(@AuthenticationPrincipal UserDetails userDetails){
        try {
            String username = userDetails.getUsername();
            List<PublicacionResponseDTO> publicaciones = publicacionService.getPublicacionesPorUsuario(username);

            return ResponseEntity.ok(publicaciones);

        } catch (EntityNotFoundException | UserNotExistException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error interno del servidor.");
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<PublicacionResponseDTO> getPublicacionPorId(@PathVariable("id") Long id){
        return ResponseEntity.ok(publicacionService.getPublicacionPorId(id));
    }


    @PostMapping
    public ResponseEntity<?> crearPublicacion(@RequestBody PublicacionRequestDTO publicacionRequestDTO, @AuthenticationPrincipal UserDetails userDetails){
        System.out.println("User details: " + userDetails);

        String username = userDetails.getUsername();

        PublicacionResponseDTO publicacion = publicacionService.crearPublicacion(publicacionRequestDTO, username);

        return ResponseEntity.status(HttpStatus.CREATED).body(publicacion);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Publicacion> editarPublicacion(@PathVariable("id") Long id, @RequestBody PublicacionRequestDTO publicacionRequestDTO){
        return ResponseEntity.ok(publicacionService.editarPublicacion(id, publicacionRequestDTO));
    }

    @DeleteMapping("/{id}")
    public boolean eliminarPublicacion(@PathVariable("id") Long id){
        return (publicacionService.eliminarPublicacion(id));
    }
}
