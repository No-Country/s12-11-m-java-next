'use client'
import { LinkHeader } from '@/utils/Links'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'

export const Header = () => {
    const pathname = usePathname()
    const router = useRouter();

    useEffect(() => {
        pathname === '/' && router.push('/home')
    }, [])

    return (
        <header className='py-1 px-4 h-20 flex items-center justify-between bg-[#DEDEDE]'>
            <div className='flex items-center gap-24'>
                <div className='text-lg font-bold mx-10'>LOGO</div>
                <div className='flex gap-16'>
                    {LinkHeader.map(res =>
                        <Link
                            className={
                                pathname === `${ res.path }`
                                    ? "font-bold border-b-2 border-black"
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
                <Link className='font-semibold' href='/auth/register'>CREAR CUENTA</Link>
                <Link className='font-semibold rounded-full bg-[#ABABAB] text-black px-6 py-2' href='/auth/login'>INICIAR SESIÓN</Link>
            </div>
        </header>
    )
}

