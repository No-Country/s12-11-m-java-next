'use client'
import { LinkHeader } from '@/utils/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IoPerson } from "react-icons/io5"


export const Header = () => {
    const [log, setLog] = useState('false')
    const pathname = usePathname()
    useEffect(() => {
        localStorage.getItem('tKeyId') ? setLog(`${ localStorage.getItem('tKeyId') }`) : setLog(log)
    }, [])

    return (
        <header className={`py-3 px-4 flex items-center justify-between text-rosa bg-transparent ${ pathname !== '/' && 'shadow-md' }`}>
            <div className='flex items-center gap-24'>
                <div className='text-lg font-bold mx-10'>LOGO</div>
                <div className='flex gap-16'>
                    {LinkHeader.map(res =>
                        <Link
                            className={
                                pathname === `${ res.path }`
                                    ? "font-semibold border-b-2 border-rosa"
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
            <div className='flex gap-5 items-center'>
                {log === 'false' ?
                    <>
                        <Link className='px-4 py-2 font-semibold border-2 border-rosa rounded-full' href='/auth/register'>CREAR CUENTA</Link>
                        <Link className='px-4 py-2 font-semibold rounded-full bg-rosa text-negro' href='/auth/login'>INICIAR SESIÓN</Link>
                    </>
                    : <Link href={'/perfil/musica'}
                        className='ml-2 w-12 h-12 rounded-full bg-rosa text-white flex justify-center items-center'>
                        <IoPerson className='text-lightViolet h-6 w-6' />
                    </Link>}
            </div>
        </header>
    )
}

