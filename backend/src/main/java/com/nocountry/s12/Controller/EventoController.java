/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.nocountry.s12.models.Evento;

/**
 *
 * @author Admin
 */
public interface EventoController {

    public ResponseEntity<?> getAll();
    public ResponseEntity<?> getOne(@PathVariable Long id);
    public ResponseEntity<?> save(@RequestBody Evento evento);
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Evento evento);
    public ResponseEntity<?> delete(@PathVariable Long id);
    
}
