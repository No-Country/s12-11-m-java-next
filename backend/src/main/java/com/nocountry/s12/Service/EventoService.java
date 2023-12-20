/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.nocountry.s12.Service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.nocountry.s12.Dto.Request.EventoRequestDTO;
import com.nocountry.s12.Dto.Response.EventoArtistaResponseDto;
import com.nocountry.s12.Dto.Response.EventoResponseDTO;


/**
 *
 * @author Admin
 */


public interface EventoService {
    
    public List<EventoResponseDTO> findAll() throws Exception;
    public EventoResponseDTO findById(Long id) throws Exception;
    public List<EventoResponseDTO> findEventoByArtist(String username) throws Exception;
    public List<EventoResponseDTO> findEventosByArtista(Long id) throws Exception;
    //public EventoResponseDTO save(EventoRequestDTO evento) throws Exception;
    public EventoResponseDTO update(Long id, EventoRequestDTO evento) throws Exception;
    public boolean delete(Long id) throws Exception;
    //public EventoArtistaResponseDto saveEventoArtista(EventoRequestDTO eventoDto, String usernameArtista,  MultipartFile img) throws Exception;
    public EventoArtistaResponseDto saveEventoArtista(String usernameArtista,
                    MultipartFile img,
                    String titulo,
				    String lugar,
		            String hora,
					double precio,
					String fechaEvento,
					String descripcion
                    ) throws Exception;

}
