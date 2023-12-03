package com.nocountry.s12.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.nocountry.s12.models.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
	Optional<Usuario> findByUsername(String username); 
	    
}

