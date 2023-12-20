package com.nocountry.s12.Dto.Response;

import java.time.LocalDate;
import com.nocountry.s12.Enum.Roles;
import com.nocountry.s12.models.Artista;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;


@Data
@NoArgsConstructor
public class ArtistaDTO {
	
    private Long id;
    private String nombreCompleto;
    private String apellidoCompleto;
    private String username;
    private String pais;
    private String provincia;
    private String localidad;
    private String zona;
    private LocalDate fechaNacimiento;
    private boolean alta;
    private Roles rol;
    private String fotoPerfil;
    private String fotoPortada;
    private String campoArtistico;
    private String generoMusical;
    private String nombreArtistico;
    private String descripcion;
    
    
    public ArtistaDTO(Artista artista) {
        this.id = artista.getId();
        this.nombreCompleto = artista.getNombreCompleto();
        this.apellidoCompleto = artista.getApellidoCompleto();
        this.username = artista.getUsername();
        this.pais = artista.getPais();
        this.provincia = artista.getProvincia();
        this.localidad = artista.getLocalidad();
        this.zona = artista.getZona();
        this.fechaNacimiento = artista.getFechaNacimiento();
        this.alta = artista.isAlta();
        this.rol = artista.getRol();
        
        if (artista.getFotoPerfil() != null) {
        	 this.fotoPerfil = artista.getFotoPerfil().getImagenUrl();
        }else {
        	 this.fotoPerfil = null;
        }
        
        if ( artista.getFotoPortada() != null) {
        	 this.fotoPortada = artista.getFotoPortada().getImagenUrl();
       }else {
    	   this.fotoPortada = null;
       }
        
       
       
        this.campoArtistico = artista.getCampoArtistico();
        this.generoMusical = artista.getGeneroMusical();
        this.nombreArtistico = artista.getNombreArtistico();
        this.descripcion = artista.getDescripcion();
    }

	
	

}
