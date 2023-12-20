/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.models;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Admin
 */
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="eventos")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Evento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titulo;
    private String lugar;
    private String hora;
    private Double precio;
    private LocalDate fechaEvento;
    private String descripcion;
    
    @OneToOne
    private Imagen imgEvento;

    @ManyToOne (fetch =FetchType.LAZY)
    @JoinColumn(name="id_artista")
    private Artista artista;
    // @ManyToOne
    // @JoinColumn(name="id_usuario")
    // private Usuario usuario;
    
}
