import { RedirectNoLogin } from '@/components/RedirectNoLogin/RedirectNoLogin'
import PerfilNavBar from '@/components/Perfil/PerfilNavBar'
import Link from 'next/link'
import React from 'react'

const pagePerfil = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className='flex flex-col'>
            <RedirectNoLogin />
            <article className='w-full h-96 flex flex-col justify-end px-5 shadow-shadowInset'>
                <span className='flex flex-col gap-5'>
                    <span className='text-xl font-bold'>nombre artistico</span>
                    <span>genero musical</span>
                    <span className='w-96'>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. inventore assumenda impedit quam laboriosam accusantium debitis.</span>
                </span>
                <span className='flex gap-5 items-center'>
                    <span>{120} Seguidores</span>
                    <span>{70} Seguidos</span>
                    <span>{12} Canciones</span>
                    <span>{3} Álbumes</span>
                    <button className='ml-10 mb-5 w-fit px-4 py-2 bg-rosa text-negro rounded-full'>Seguir</button>
                    <Link href={'/auth/configPerfil'} className=' mb-5 w-fit px-4 py-2 bg-rosa text-negro  rounded-full'>Editar perfil</Link>
                </span>
            </article>
            <article className='flex flex-col w-full gap-10 px-5 bg-darkViolet text-white min-h-[36vh] h-auto py-5 '>
                <PerfilNavBar />
                {children}
            </article>
        </section>

    )
}

export default pagePerfil