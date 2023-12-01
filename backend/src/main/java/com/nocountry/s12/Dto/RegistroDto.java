package com.nocountry.s12.Dto;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroDto {
    String email;
    String password;
    String rol;        
    String nombreArtistico;
    String descripcion; 

}