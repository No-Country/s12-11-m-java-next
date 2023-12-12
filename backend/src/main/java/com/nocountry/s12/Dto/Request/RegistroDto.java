package com.nocountry.s12.Dto.Request;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RegistroDto {

	@NotBlank (message = "Campo obligatorio.")
    @Email(message = "Debe ingresar una dirección de correo válida.")
    @Pattern(regexp = "^[a-zA-Z0-9_!#$%&'*+/=?{|}~^.-]+@[a-zA-Z0-9.-]+$",
            message = "Debe ingresar una dirección de correo válida.")
    String email;
    
    @NotBlank(message = "La contrase\u00F1a no debe estar en blanco o nulo")
    @Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@#$%^&+=!]).{8,15}$", message = "La contrase\u00F1a no cumple con los requisitos, ingrese letras mayusculas y minusculas, numeros, un caracter especial y maximo 15")
    String password;
    String rol;        
    @NotBlank (message = "Campo obligatorio.")
    @Size(min = 2, max = 30, message = "El nombre artístico debe contener entre 2 y 30 caracteres.")
    String nombreArtistico;
    @NotBlank (message = "Campo obligatorio.")
    @Size(min = 10, max = 100, message = "La descripción debe contener entre 10 y 100 caracteres.")
    String descripcion; 

}