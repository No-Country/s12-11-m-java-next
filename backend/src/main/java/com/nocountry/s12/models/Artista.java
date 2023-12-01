/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.models;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

import java.time.LocalDate;
import java.util.List;

import com.nocountry.s12.Enum.Roles;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;



@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="artista")
public class Artista extends Usuario{
    private String nombreArtistico;
    private String descripcion;
	
    @OneToMany(mappedBy = "artista")
    private List<Album> albums;
    
    @OneToMany(mappedBy = "artista")
    private List<Evento> eventos;
}
