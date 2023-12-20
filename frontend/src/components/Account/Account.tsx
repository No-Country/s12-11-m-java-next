'use client'
import postImgPortada from '@/utils/imagesRequest/postImgPortada'
import getUserMe from '@/utils/userRequest/getUserMe'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface dataType {
    nombreCompleto: string,
    albums: string,
    eventos: string,
    publicaciones: string,
    generoMusical: string,
    descripcion: string,
}

const Account = () => {
    const [Id, setId] = useState()
    const [i, setI] = useState()
    const [img, setImg] = useState()
    const [data, setData] = useState()
    const [fileName, setFileName] = useState()
    useEffect(() => {
        const token = localStorage.getItem("tKeyId")
        data ? {} : getUserMe(token, setData)
        data ? (setId(data.id), setImg(data.fotoPerfil.imagenUrl)) : setId();
        console.log(data);

    }, [data])
    useEffect(() => {
        setI(i)
        Id ? subirImagen() : {}
    }, [i])

    const subirImagen = () => {
        const token = localStorage.getItem("tKeyId")
        const formdata = new FormData()
        formdata.append('imagen', i)
        postImgPortada(Id, formdata, token);


    }
    return (
        <label className={`w-full h-[350px] flex flex-col justify-end shadow-shadowInset cursor-pointer`} htmlFor="portada">
            {img ? <img src={img} alt="" className="object-cover  h-full w-full " /> : <></>}
            {!img ?
                <span className="flex flex-col items-center gap-2 cursor-pointer h-full justify-center">
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
                : <></>}
            <input hidden type="file" name="imagen" id="portada"
                onChange={(e) => {
                    e.target.files[0] ? setImg(URL.createObjectURL(e.target.files[0])) : ''
                    setI(e.target.files[0])
                }} />
            <div className='absolute px-5 shadow-shadowInset w-full' >
                <span className='flex flex-col gap-5'>
                    <span className='text-xl font-bold'>{data?.nombreCompleto}</span>
                    <span>{data?.generoMusical}</span>
                    <span className='w-96'>{data?.descripcion}</span>
                </span>
                <span className='flex gap-5 items-center mb-5'>
                    {/* <span>{data?.canciones?.length} Canciones</span> */}
                    <span onClick={subirImagen}>{data?.albums?.length} Albums</span>
                    <span>{data?.eventos?.length} Eventos</span>
                    <span>{data?.publicaciones?.length} Posts</span>
                    <Link href={'/auth/configPerfil'} className=' w-fit px-4 py-2 bg-rosa text-negro  rounded-full'>Editar perfil</Link>
                </span>
            </div>
        </label >
    )
}

export default Account