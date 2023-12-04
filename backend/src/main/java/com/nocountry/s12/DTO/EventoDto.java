package com.nocountry.s12.Dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class EventoDto {
    
    private Long idEvento;
    private String titulo;
    private String lugar;
    private String hora;
    private Double precio;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate fechaEvento;
    
}
