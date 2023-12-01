package com.nocountry.s12.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.s12.models.Artista;

public interface ArtistaRepository extends JpaRepository<Artista, Integer> {
	Optional<Artista> findByUsername(String username);

}

