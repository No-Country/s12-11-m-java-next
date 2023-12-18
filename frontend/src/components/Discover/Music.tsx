'use client'
import { useState } from 'react'
import { Song } from './Song'

const Music = () => {
  const [selectedGenre, setselectedGenre] = useState('Rock')
  const data = [1, 3, 4, 5, 6, 7, 8, 9, 0]

  return (
    <div>
      <h1 className="text-2xl font-semibold">{selectedGenre}</h1>
      <div className="flex flex-col gap-3 w-full">
        {
          data.map(item => (
            <Song key={item} />
          ))
        }
      </div>
    </div>
  )
}

export default Music