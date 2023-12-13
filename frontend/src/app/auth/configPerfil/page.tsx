'use client'
import { RedirectNoLogin } from '@/components/RedirectNoLogin/RedirectNoLogin';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { FaArrowLeft } from "react-icons/fa";
const pageConfigPerfil = () => {
  return (
    // componetizar  elementos como el input , el switch o el form

    <section className="h-full w-full flex flex-col items-center bg-gradient-to-t from-lightViolet to-darkViolet">
      <RedirectNoLogin />
      <div className='h-full w-full flex text-white items-center  pt-10 pl-5'>
        <FaArrowLeft />
        <Link href='/' className='pl-1 self-start'>Volver</Link>
      </div>
      <button onClick={() => { localStorage.clear() }} className='relative bottom-8 self-end text-white mr-5 px-4 py-2 border-2 border-white rounded-full'>Cerrar sesión</button>
      <div className="flex flex-col items-center p-10 text-white justify-center w-[600px]">
        <h1 className="text-xl">EDITAR PERFIL</h1>
        <p className="my-4 w-full">
          Lorem ipsum dolor sit amet consectetur sit amet conse sit amet
          consesit amet conse adipisicing elit. consesit amet conse adipisicing
          elit.
        </p>
        <form action="" className=" flex flex-col  items-center ">
          {/*  input file */}
          <div className="rounded-md border border-dashed border-gray-500 bg-transparent p-4 shadow-md w-full">
            <label
              htmlFor="upload"
              className="flex flex-col items-center gap-2 cursor-pointer"
            >
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
            </label>
            <input id="upload" type="file" className="hidden" />
          </div>
          {/* inputfile/ */}
          <div className="flex gap-10 mt-8 w-full ">
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="name"> Nombre</label>
              <input
                type="text"
                id="name"
                placeholder="Nombre"
                className="rounded-lg py-2 px-3 border-2 "
              />
            </div>
            <div className="flex flex-col justify-center  w-1/2 ">
              <label htmlFor="lastname"> Apellido</label>
              <input
                type="text"
                id="lastname"
                placeholder="Apellido"
                className="rounded-lg py-2 px-3 border-2"
              />
            </div>
          </div>
          <div className="flex flex-col mt-8 justify-center w-full">
            <label htmlFor="username"> Nombre de Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Nombre de usuario"
              className="rounded-lg py-2 px-3 border-2 "
            />
          </div>
          <div className="flex flex-col mt-8 self-start">
            <h3 className="text-lg">¿Eres Artista?</h3>
            {/* SWICTCH PARA SI O NO */}
            <label
              htmlFor="Toggle1"
              className="inline-flex items-center space-x-4 cursor-pointer"
            >
              <span>No</span>
              <span className="relative">
                <input id="Toggle1" type="checkbox" className="hidden peer" />
                <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-400 peer-checked:dark:bg-violet-400"></div>
                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
              </span>
              <span>Si</span>
            </label>
          </div>
          <div className="flex gap-10 mt-8 w-full ">
            <div className="flex flex-col justify-center w-1/2">
              <label htmlFor="artisticName"> Nombre Artistico</label>
              <input
                type="text"
                id="artisticName"
                placeholder="Nombre"
                className="rounded-lg py-2 px-3 border-2 "
              />
            </div>
            <div className="flex flex-col justify-center  w-1/2 ">
              <label htmlFor="ambiente" className="">
                Genero Musical
              </label>
              <select
                id="ambiente"
                name="ambiente"
                required
                placeholder="Seleccione"
                className="px-3 py-2 border-2 rounded-lg  border-zinc-200 focus:outline-none"
              >
                <option value={1}> lorem</option>
                <option value={2}> lorem </option>
                <option value={3}> lorem </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mt-8 justify-center w-full">
            <label htmlFor="artisticName"> Biografia</label>
            <textarea
              id="artisticName"
              placeholder="Nombre"
              className="rounded-lg py-5 px-3 border-2 "
            />
          </div>
          <button className="px-6 py-2 bg-purple-200 mt-8 text-black  rounded-[30px] shadow justify-center items-center gap-2.5">
            Guardar
          </button>
        </form>
      </div>
    </section>
  )
}

export default pageConfigPerfil
