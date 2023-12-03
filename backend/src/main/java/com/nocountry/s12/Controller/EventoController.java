/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.Controller;

<<<<<<< HEAD
import org.springframework.web.bind.annotation.RestController;
=======
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.nocountry.s12.models.Evento;
>>>>>>> 1c78d28471e5dde0dddcb503fda0954e7b0b4c40

/**
 *
 * @author Admin
 */
<<<<<<< HEAD
@RestController
public class EventoController {
=======
public interface EventoController {

    public ResponseEntity<?> getAll();
    public ResponseEntity<?> getOne(@PathVariable Long id);
    public ResponseEntity<?> save(@RequestBody Evento evento);
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Evento evento);
    public ResponseEntity<?> delete(@PathVariable Long id);
>>>>>>> 1c78d28471e5dde0dddcb503fda0954e7b0b4c40
    
}
