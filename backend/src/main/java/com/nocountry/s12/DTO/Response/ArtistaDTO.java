package com.nocountry.s12.Dto.Response;


import java.time.LocalDate;
import java.util.List;

import com.nocountry.s12.Enum.Roles;
import com.nocountry.s12.models.Imagen;
import com.nocountry.s12.models.ListaReproduccion;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;



@Data
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
    
    
    
	
	

}
