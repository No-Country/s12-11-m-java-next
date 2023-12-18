/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nocountry.s12.Repository;

import com.nocountry.s12.models.Cancion;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */
@Repository
public interface MusicRepository extends JpaRepository<Cancion, Long>{
	
	@Query("select c from Cancion c where c.genero = :genero")
	List<Cancion> findByGenero(@Param("genero") String genero);
    
}
