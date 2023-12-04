/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.Service;

import java.util.List;

import com.nocountry.s12.Dto.EventoDto;


/**
 *
 * @author Admin
 */


public interface EventoService <Evento, Long>{
    
    public List<EventoDto> findAll() throws Exception;
    public Evento findById(Long id) throws Exception;
    public Evento save(Evento evento) throws Exception;
    public Evento update(Long id, Evento evento) throws Exception;
    public boolean delete(Long id) throws Exception;

}
