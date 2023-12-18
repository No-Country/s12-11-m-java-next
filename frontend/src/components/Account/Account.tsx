'use client'
import getUserMe from '@/utils/userRequest/getUserMe'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Account = () => {
    const [data, setData] = useState()
    useEffect(() => {
        const token = localStorage.getItem("tKeyId")
        data ? {} : getUserMe(token, setData)
    }, [data])

    return (
        <article className='w-full h-[350px] flex flex-col justify-end px-5 shadow-shadowInset'>
            <span className='flex flex-col gap-5'>
                <span className='text-xl font-bold'>{data?.nombreCompleto}</span>
                <span>{data?.generoMusical}</span>
                <span className='w-96'>{data?.descripcion}</span>
            </span>
            <span className='flex gap-5 items-center mb-5'>
                {/* <span>{data?.canciones?.length} Canciones</span> */}
                <span>{data?.albums?.length} Albums</span>
                <span>{data?.eventos?.length} Eventos</span>
                <span>{data?.publicaciones?.length} Posts</span>
                <Link href={'/auth/configPerfil'} className=' w-fit px-4 py-2 bg-rosa text-negro  rounded-full'>Editar perfil</Link>
            </span>
        </article>
    )
}

export default Account