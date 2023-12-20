"use client"

import { useEffect, useState } from "react"
import { AddAlbum } from "./AddAlbum"
import { Album } from "./Album"
import getAlbums from "@/utils/albumsRequest/getAlbums"
import { type AlbumsType } from "@/interfaces/album.interface"

export const Albums = () => {
  const [albums, setAlbums] = useState<AlbumsType[] | null>(null)
  const token = localStorage.getItem("tKeyId")

  useEffect(() => {
    getAlbums(setAlbums, token).catch((e: Error) => {
      console.error(e)
    })
  }, [])

  return (
    <div className="grid grid-cols-auto gap-4 pt-8">
      <AddAlbum />
      {albums?.map((album) => {
        const { img, titulo, fechaPublicacion } = album
        return (
          <Album
            key={album.titulo}
            img={img}
            titulo={titulo}
            fechaPublicacion={fechaPublicacion}
          />
        )
      })}
    </div>
  )
}
