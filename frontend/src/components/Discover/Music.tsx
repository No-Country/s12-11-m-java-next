'use client'
import getMusic from '@/utils/musicRequest/getMusic';
import { useEffect, useState } from 'react';
import { Song } from './Song';

interface dataType {
    id: number;
    titulo: string;
    genero: string;
    fechaSubida: string;
    imagenes: string[];
    audioUrl: string;
    albumId: 1;
}

interface MusicProps {
    selectedGenre: string | null;
}

const Music = ({ selectedGenre }: MusicProps) => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
        getMusic(setData).catch((e: Error) => {
            console.error(e)
        })
        console.log(data);

    }, [])

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center">{selectedGenre !== null ? selectedGenre : 'Musica'}</h1>
            <div className="flex flex-col gap-3 w-full">
                {data.map(item => (
                    <Song key={item.id} title={item.titulo} image={item.imagenes[0]} music={item.audioUrl} genre={item.genero} />
                ))
                }
            </div>
        </div>
    )
}

export default Music