package com.nocountry.s12.Controller;

import com.nocountry.s12.Dto.Request.PublicacionRequestDTO;
import com.nocountry.s12.Dto.Response.PublicacionResponseDTO;
import com.nocountry.s12.Exception.UserNotExistException;
import com.nocountry.s12.Service.PublicacionService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    public ResponseEntity<?> crearPublicacion(
            // TODO: ver si va RequestParam
            @RequestPart(value = "imagen", required = false) MultipartFile imagen,
            @RequestPart("mensaje") String mensaje,
            @AuthenticationPrincipal UserDetails userDetails)
    {
        try {
            String username = userDetails.getUsername();

            PublicacionRequestDTO publicacionRequestDTO = new PublicacionRequestDTO(mensaje, imagen);

            PublicacionResponseDTO publicacion = publicacionService.crearPublicacion(publicacionRequestDTO, username);

            return ResponseEntity.status(HttpStatus.CREATED).body(publicacion);

        }catch (UserNotExistException e){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error al procesar la imagen.");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editarPublicacion(
            @PathVariable("id") Long id,
            @RequestParam(value = "imagen", required = false) MultipartFile imagen,
            @RequestParam(value = "mensaje") String mensaje,
            @AuthenticationPrincipal UserDetails userDetails)
    {
        try {
            String username = userDetails.getUsername();

            PublicacionRequestDTO publicacionRequestDTO = new PublicacionRequestDTO(mensaje, imagen);

            PublicacionResponseDTO publicacion = publicacionService.editarPublicacion(id, publicacionRequestDTO, username);

            return ResponseEntity.ok(publicacion);

        } catch (UserNotExistException | IOException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?>  eliminarPublicacion(
            @PathVariable("id") Long id,
            @AuthenticationPrincipal UserDetails userDetails)
    {
        try {
            String username = userDetails.getUsername();

            publicacionService.eliminarPublicacion(id, username);

            return ResponseEntity.ok("Publicación eliminada exitosamente");

        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        }

    }
}
