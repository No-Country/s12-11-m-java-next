package com.nocountry.s12.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Data //getters and setters
@Entity // esta class sera una entidad
@NoArgsConstructor  // Constructor vacio
@AllArgsConstructor //Constructor con atributos
@Table(name="publicaciones")

public class Publication {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String descripcion;
    private LocalDate fechaCreacion;
    @OneToMany(mappedBy = "publicacion")
    private List<Reaccion>reacciones;

}
