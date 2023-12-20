'use client'
import getMusic from '@/utils/musicRequest/getMusic'
import { useEffect, useState } from 'react'
import { Song } from './Song'

interface dataType {
  id: number,
  titulo: string,
  genero: string,
  fechaSubida: string,
  imagen: string[],
  audioUrl: string,
  albumId: 1
}

interface MusicProps {
  selectedGenre: string | null;
}

const Music = ({ selectedGenre }: MusicProps) => {
  // const [selectedGenre, setselectedGenre] = useState(null)
  const [data, setData] = useState<dataType[]>([])

  useEffect(() => {
    getMusic(setData)
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-semibold">{selectedGenre !== null ? selectedGenre : 'Musica'}</h1>
      <div className="flex flex-col gap-3 w-full">
        {data.map(item => (
          <Song key={item.id} />
        ))
        }
      </div>
    </div>
  )
}

export default Music