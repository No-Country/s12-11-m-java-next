'use client'
import { LinkHeader } from '@/utils/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { IoPerson } from "react-icons/io5"


export const Header = () => {
    const [log, setLog] = useState(localStorage.getItem('tKeyId'))
    const pathname = usePathname()

    return (
        <header className={`py-1 px-4 h-20 flex items-center justify-between text-rosa bg-transparent ${ pathname !== '/' && 'shadow-md' }`}>
            <div className='flex items-center gap-24'>
                <div className='text-lg font-bold mx-10'>LOGO</div>
                <div className='flex gap-16'>
                    {LinkHeader.map(res =>
                        <Link
                            className={
                                pathname === `${ res.path }`
                                    ? "font-bold border-b-2 border-rosa"
                                    : ""
                            }
                            key={res.label}
                            href={res.path}
                        >
                            {res.label}
                        </Link>
                    )}
                </div>
            </div>
            <div className='flex gap-10 items-center'>
                {pathname === '/home' && log === null ?
                    <>
                        <Link className='font-semibold px-6 py-2 border-2 border-rosa rounded-full' href='/auth/register'>CREAR CUENTA</Link>
                        <Link className='font-semibold rounded-full bg-rosa text-negro px-6 py-2' href='/auth/login'>INICIAR SESIÓN</Link>
                    </>
                    : <Link href={'/perfil/musica'}
                        className='ml-2 w-12 h-12 rounded-full bg-rosa text-white flex justify-center items-center'>
                        <IoPerson className='text-lightViolet h-6 w-6' />
                    </Link>}
            </div>
        </header>
    )
}

