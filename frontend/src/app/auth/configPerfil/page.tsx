"use client"
import { genres } from "@/utils/genres"
import getUserMe from "@/utils/userRequest/getUserMe"
import putUserMe from "@/utils/userRequest/putUserMe"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"

const pageConfigPerfil = () => {
  const [img, setImg] = useState('')
  const [data, setData] = useState()
  const [rol, setRol] = useState()
  useEffect(() => {
    const token = localStorage.getItem("tKeyId")
    data ? {} : getUserMe(token, setData)
    setRol(data ? data.rol : '')
    setImg(data?.fotoPerfil.imagenUrl)
  }, [data])
  const updateUser = (e: any) => {
    e.preventDefault()
    const formDatauser = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    const token = localStorage.getItem("tKeyId")
    const Id = data ? data.id : ''

    putUserMe(formDatauser, token, Id)
  }
  return (
    // componetizar  elementos como el input , el switch o el form
    <section className="h-full w-full flex flex-col items-center bg-gradient-to-t from-lightViolet to-darkViolet">
      <div className="h-full w-full flex text-white items-center  pt-10 pl-5">
        <FaArrowLeft />
        <Link href="/perfil/musica" className="pl-1 self-start">
          Volver
        </Link>
      </div>
      <button
        onClick={() => {
          localStorage.clear()
          window.location.replace('/')
        }}
        className="relative bottom-8 self-end text-white mr-5 px-4 py-2 border-2 border-white rounded-full"
      >
        Cerrar sesión
      </button>
      <div className="flex flex-col items-center p-10 text-white justify-center w-[600px]">
        <h1 className="text-xl mb-9">EDITAR PERFIL</h1>

        <form action="" className=" flex flex-col  items-center " onSubmit={updateUser}>
          {/*  input file */}
          <div className="rounded-md border border-dashed border-gray-500 bg-transparent p-4 shadow-md w-full">
            <label
              htmlFor="upload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
              {!img ?
                <span className="flex flex-col items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 fill-white stroke-gray-800"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-white font-medium">Agregar Foto</span>
                </span>
                : <img src={img} alt="" hidden={!img.length > 0} className="object-cover  h-[200px] w-full rounded-md" />}

              <input id="upload" type="file" hidden className="h-full  w-full"
                onChange={(e) => { setImg(URL.createObjectURL(e.target.files[0])) }} />
            </label>
          </div>
          {/* inputfile/ */}
          <div className="flex gap-10 mt-8 w-full ">
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="name"> Nombre</label>
              <input
                type="text"
                name="nombre"
                defaultValue={data?.nombreCompleto}
                placeholder="Nombre"
                className="rounded-lg py-2 px-3 border-2 bg-transparent border-zinc-500 placeholder:text-zinc-500 "
              />
            </div>
            <div className="flex flex-col justify-center  w-1/2 ">
              <label htmlFor="lastname"> Apellido</label>
              <input
                name="apellido"
                defaultValue={data?.apellidoCompleto}
                type="text"
                id="lastname"
                placeholder="Apellido"
                className="rounded-lg py-2 px-3 border-2  bg-transparent border-zinc-500 placeholder:text-zinc-500"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 justify-center w-full">
            <label htmlFor="username"> Nombre de Usuario</label>
            <input
              defaultValue={data?.username}
              type="text"
              name="email"
              placeholder="Nombre de usuario"
              className="rounded-lg py-2 px-3 border-2  bg-transparent border-zinc-500 placeholder:text-zinc-500 "
            />
          </div>
          <div className="self-start mt-8">
            <label className="relative inline-flex items-center cursor-pointer">
              <input

                type="checkbox" className="sr-only peer"
                onChange={() => {
                  setRol(rol === 'OYENTE' ? 'ARTISTA' : 'OYENTE'
                  )
                }} />
              <input hidden type="text" name='rol'
                defaultValue={rol || data?.rol} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{rol}</span>
            </label>
          </div>
          <div className="flex gap-10 mt-8 w-full ">
            <div className="flex flex-col justify-center   w-full ">
              <label htmlFor="ambiente" className="">
                Genero Musical
              </label>
              <select
                defaultValue={data?.generoMusical}
                name='generoMusical'
                placeholder="Seleccione"
                className="px-3 py-2 border-2 rounded-lg text-zinc-500  bg-transparent border-zinc-500 placeholder:text-zinc-500   focus:outline-none"
              >
                {data?.generoMusical ? <></> : <option value="">Elija su genero</option>}
                {genres.map((genre) => (
                  <option
                    value={genre.title}
                    key={genre.id}
                  >
                    {genre.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-8 justify-center w-full">
            <label htmlFor="artisticName"> Biografia</label>
            <textarea
              defaultValue={data?.descripcion}
              name='descripcion'
              id="artisticName"
              placeholder="Biografia"
              className="rounded-lg py-5 px-3 border-2  bg-transparent border-zinc-500 placeholder:text-zinc-500 "
            />
          </div>
          <button
            // disabled={userData.nombre && userData.aperllido && userData.email && userData.rol}
            className="px-6 py-2 bg-purple-200 mt-8 text-black  rounded-[30px] shadow justify-center items-center gap-2.5">
            Guardar
          </button>
        </form>
      </div>
    </section>
  )
}

export default pageConfigPerfil
