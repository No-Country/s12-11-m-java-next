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
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Usuario implements UserDetails {
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
    private boolean alta;
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

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return List.of(new SimpleGrantedAuthority((rol.name())));
    }
    @Override
    public String getUsername() {
        return username;
    } 
    @Override
    public boolean isAccountNonExpired() {
       return true;
    }
    @Override
    public boolean isAccountNonLocked() {
       return true;
    }
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
    @Override
    public boolean isEnabled() {
        return true;
    }
}

//Se establece la relación bidireccional. Cada usuario puede tener varias listas
// de reproducción, y cada lista de reproducción puede pertenecer a varios usuarios.
// Además, cada lista de reproducción puede contener varias canciones, y una canción
// puede estar en varias listas de reproducción.
