/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.nocountry.s12.Repository;

import com.nocountry.s12.models.Album;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Admin
 */
@Repository
public interface AlbumRepository extends JpaRepository<Album, Long>{
    @Query("SELECT a FROM Album a WHERE a.artista.username = :username")
    Optional<List<Album>> findByUsername(@Param("username") String username); 
    
    Album findByTitulo(@Param("titulo") String titulo);
}
