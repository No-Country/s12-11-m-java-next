/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.Dto.Request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 *
 * @author Admin
 */
public record AlbumRequestDTO(
        @NotBlank(message = "El campo genero no debe estar vacio o null")
        @Size(max = 30, message = "El campo 'genero' debe tener como máximo 30 caracteres")   
        @Pattern(regexp = "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$", message = "Solamente se permite texto en el campo 'genero'")        
        String genero,
        
        @NotBlank(message = "El campo fecha no debe estar vacio o null")
        String fechaPublicacion,
        
        
        @NotBlank(message = "El campo titulo no debe estar vacio o null")
        @Size(max = 30, message = "El campo 'titulo' debe tener como máximo 30 caracteres")
        @Pattern(regexp = "^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\\s]+$", message = "Solamente se permite texto en el campo 'titulo'") 
        String titulo
        
        
        ) {
    

}
