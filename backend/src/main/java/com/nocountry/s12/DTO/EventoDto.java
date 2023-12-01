package com.nocountry.s12.DTO;

import java.time.LocalDate;

import lombok.Data;

@Data
public class EventoDto {
    
    private Long idEvento;
    private String titulo;
    private String lugar;
    private String hora;
    private Double precio;
    private LocalDate fechaEvento;
}
