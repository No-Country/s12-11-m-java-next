package com.nocountry.s12.mapper;

import java.time.LocalDate;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.nocountry.s12.DTO.EventoDto;
import com.nocountry.s12.models.Evento;

@Mapper
public interface EventoMapper {

    @Mappings({
        @Mapping(target = "id", source= "eventoDto.idEvento") //14:46
    })
    Evento eventoDtoToEvento(EventoDto eventoDto);

    @Mappings({
        @Mapping(target = "idEvento", source= "evento.id") //14:46
    })
    EventoDto evetoToEventoDto(Evento evento);

}
