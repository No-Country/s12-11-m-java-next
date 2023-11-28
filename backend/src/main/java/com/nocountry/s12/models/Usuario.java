/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.models;

import com.nocountry.s12.Enum.Roles;
import jakarta.persistence.*;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author Admin
 */
@Entity
@Data

@NoArgsConstructor
@AllArgsConstructor
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombreCompleto;
    private String apellidoCompleto;
    private String username;
    private String password;
    private String pais;
    private String provincia;
    private String localidad;
    private String zona;
    private LocalDate fechaNacimiento;
    //private List<Publicacion> publicaciones;
    //private List<ListaReproduccion> listasReproduccion;
    
    @Enumerated(EnumType.STRING)
    private Roles rol;

    @ManyToMany
    @JoinTable(
            name = "usuario_listaReproduccion",
            joinColumns = @JoinColumn(name = "usuario_id"),
            inverseJoinColumns = @JoinColumn(name = "lista_id")
    )
    private List<ListaReproduccion> listaReproduccion;


}

//Se establece la relación bidireccional. Cada usuario puede tener varias listas
// de reproducción, y cada lista de reproducción puede pertenecer a varios usuarios.
// Además, cada lista de reproducción puede contener varias canciones, y una canción
// puede estar en varias listas de reproducción.
