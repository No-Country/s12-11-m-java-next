import Link from 'next/link'
import React from 'react'

const pagePerfil = ({
    children,
}: {
    children: React.ReactNode
}) => {
    return (
        <section className='flex flex-col'>
            <article className='w-full h-96 flex flex-col justify-end px-5'>
                <span className='text-xl font-bold'>nombre artistico</span>
                <span className='flex gap-5'>
                    <span>genero musical</span>
                    <span>-</span>
                    <span>ubicacion</span>
                </span>
                <span className='flex gap-5 mt-5'>
                    <span>seguidores</span>
                    <span>canciones</span>
                    <span>albunes</span>
                </span>
                <Link href={'/auth/configPerfil'} className='mt-5 w-fit px-4 py-2 border-2 rounded-full'>Editar perfil</Link>
            </article>
            <article className='flex flex-col w-full gap-10 px-5'>
                <span className='flex flex-row px-5 border-b-2 self-center  w-full gap-10 justify-center'>
                    <Link href={'/perfil/musica'}>Musica</Link>
                    <Link href={'/perfil/post'}>Posts</Link>
                    <Link href={'/perfil/eventos'}>Eventos</Link>
                </span>
                {children}
            </article>
        </section>

    )
}

export default pagePerfil