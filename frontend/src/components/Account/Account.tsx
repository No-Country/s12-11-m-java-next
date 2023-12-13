import Link from 'next/link'
import React from 'react'

const Account = () => {
    return (
        <article className='w-full h-[350px] flex flex-col justify-end px-5 shadow-shadowInset'>
            <span className='flex flex-col gap-5'>
                <span className='text-xl font-bold'>nombre artistico</span>
                <span>genero musical</span>
                <span className='w-96'>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore assumenda impedit quam laboriosam accusantium debitis.</span>
            </span>
            <span className='flex gap-5 items-center mb-5'>
                <span>{120} Seguidores</span>
                <span>{70} Seguidos</span>
                <span>{12} Canciones</span>
                <span>{3} Álbumes</span>
                <Link href={'/auth/configPerfil'} className=' w-fit px-4 py-2 bg-rosa text-negro  rounded-full'>Editar perfil</Link>
            </span>
        </article>
    )
}

export default Account