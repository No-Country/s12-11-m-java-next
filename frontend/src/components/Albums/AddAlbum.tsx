"use client"

import { useRef } from "react"
import { genres } from "@/utils/genres"
import { postAlbum } from "@/utils/albumsRequest/postAlbum"

export const AddAlbum = () => {
  const album = useRef<HTMLDialogElement>(null)

  const openModal = () => {
    album.current?.showModal()
  }
  const closeModal = () => {
    album.current?.close()
  }

  return (
    <>
      <div className="w-full h-auto aspect-square flex flex-col gap-2 justify-center">
        <button
          className="w-full h-full bg-white rounded-lg overflow-hidden"
          onClick={openModal}
        >
          <span className="text-4xl text-darkViolet">+</span>
        </button>
        <p>Agregar album</p>
      </div>
      <dialog ref={album} className="fixed bottom-1/4 rounded-md">
        <form
          action=""
          encType="multipart/form-data"
          onReset={closeModal}
          onSubmit={(event) => {
            const token = localStorage.getItem("tKeyId")
            event.preventDefault()
            const albumData = Object.fromEntries(
              new FormData(event.currentTarget),
            )
            const data = new FormData()
            data.append("img", albumData.img)
            data.append("titulo", albumData.titulo)
            data.append("genero", albumData.genero)
            data.append("fechaPublicacion", albumData.fechaPublicacion)
            console.log(albumData)
            void postAlbum(data, token, closeModal).catch(console.error)
          }}
          className="w-fit bg-white text-negro flex flex-col gap-8 justify-center p-6 rounded-md shadow-2xl"
        >
          <fieldset className="flex flex-col gap-4">
            <label
              htmlFor="portrait"
              className="outline-1 outline-dashed outline-negro p-2 rounded-md text-center cursor-pointer"
            >
              <span className="opacity-50">
                <span className="text-xl">+</span> Agregar portada
              </span>
              <input
                name="img"
                type="file"
                placeholder="+ Agregar portada"
                hidden
                id="portrait"
              />
            </label>
            <label htmlFor="title" className="grid gap-2">
              <p className="font-medium">Título de álbum</p>
              <input
                id="title"
                required
                name="titulo"
                type="text"
                placeholder="Título de álbum"
                className="w-full outline outline-1 px-4 py-2 outline-blackMd rounded-md"
              />
            </label>
            <fieldset className="flex flex-wrap gap-4">
              <label htmlFor="genre" className="grid gap-2">
                <p className="font-medium">Género musical</p>
                <select
                  name="genero"
                  id="genre"

                  className="w-full outline outline-1 px-3 py-2 outline-blackMd rounded-md text-blackMd"
                >
                  <option value="">Seleccionar</option>
                  {genres.map((res) => (
                    <option value={res.title} key={res.id}>
                      {res.title}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="year" className="grid gap-2">
                <p className="font-medium">Año de lanzamiento</p>
                {/* <select
                  name="fechaPublicacion"
                  id="year"
                  placeholder="Seleccionar"
                  className="w-full outline outline-1 p-2 outline-blackMd rounded-md text-blackMd"
                >
                  <option value="">Seleccionar</option>
                  {years.map((year) => (
                    <option value={year} key={year}>
                      {year}
                    </option>
                  ))}
                </select> */}
                <input type="date" name="fechaPublicacion" />
              </label>
            </fieldset>
          </fieldset>
          <div className="flex w-full justify-between">
            <input
              type="submit"
              className="px-4 py-2 bg-negro text-white rounded-full cursor-pointer hover:bg-opacity-90 duration-300"
              value="Subir album"
            />
            <input
              type="reset"
              className="px-4 py-2 bg-negro text-white rounded-full cursor-pointer hover:bg-opacity-90 duration-300"
              value="Cancelar"
            />
          </div>
        </form>
      </dialog>
    </>
  )
}
