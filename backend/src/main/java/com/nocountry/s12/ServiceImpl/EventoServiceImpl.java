package com.nocountry.s12.ServiceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nocountry.s12.Dto.EventoDto;
import com.nocountry.s12.Repository.EventoRepository;
import com.nocountry.s12.Service.EventoService;
import com.nocountry.s12.models.Evento;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventoServiceImpl implements EventoService<Evento, Long>{

    
    protected EventoRepository eventoRepository;

    public EventoServiceImpl(EventoRepository eventoRepository) {
        this.eventoRepository = eventoRepository;
    }

    @Override
    @Transactional
    public List<EventoDto> findAll() throws Exception {
        try {
            List<Evento> eventos = eventoRepository.findAll();
            List<EventoDto> listaEventoDto = new ArrayList<EventoDto>();
            for(Evento eventosLista : eventos){
                EventoDto dto = new EventoDto();
                dto.setFechaEvento(eventosLista.getFechaEvento());
                dto.setHora(eventosLista.getHora());
                dto.setIdEvento(eventosLista.getId());
                dto.setLugar(eventosLista.getLugar());
                dto.setPrecio(eventosLista.getPrecio());
                dto.setTitulo(eventosLista.getTitulo());
                listaEventoDto.add(dto);
            }
            return listaEventoDto;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public Evento findById(Long id) throws Exception {
        try {
            Optional <Evento> evento = eventoRepository.findById(id);
            return evento.get();
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    public boolean existsById (Long id) {
		return eventoRepository.existsById(id);
	}

    @Override
    @Transactional
    public Evento save(Evento evento) throws Exception {
        try {
            evento = eventoRepository.save(evento);
            return evento;
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }

    @Override
    @Transactional
    public Evento update(Long id, Evento evento) throws Exception {
        try {
            if (!eventoRepository.existsById(id));
            Optional<Evento> eventoOptional = eventoRepository.findById(id);
            Evento eventoUpdate = eventoOptional.get();
            eventoUpdate.setId(id);
            eventoUpdate = eventoRepository.save(eventoUpdate);
            return eventoUpdate;
        } catch (Exception e) {
              throw new Exception(e.getMessage());
        }
    }
    
    @Override
    @Transactional
    public boolean delete(Long id) throws Exception {
        try {
            if(eventoRepository.existsById(id)){
                eventoRepository.deleteById(id);
                return true;
            }else{
                throw new Exception();
            }
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }
}
