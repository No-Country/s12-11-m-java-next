'use client'
import { LinkPerfil } from '@/utils/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const PerfilNavBar = () => {
    const pathname = usePathname()
    return (
        <span className='flex flex-row px-5 border-b-2 self-center  w-full gap-10 justify-center'>
            {LinkPerfil.map(res =>
                <Link
                    className={
                        pathname === `${res.path}`
                            ? "font-bold border-b-2"
                            : ""
                    }
                    key={res.label}
                    href={res.path}
                >
                    {res.label}
                </Link>)}
        </span>
    )
}

export default PerfilNavBar