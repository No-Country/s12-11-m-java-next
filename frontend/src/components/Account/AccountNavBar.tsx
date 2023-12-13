'use client'
import { LinkPerfil } from '@/utils/Links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const AccountNavBar = () => {
    const pathname = usePathname()
    return (
        <ul className='flex flex-row px-5 border-b-2 self-center  w-full gap-10 justify-center list-none'>
            {LinkPerfil.map(res =>
                <li key={res.label}
                    className={
                        pathname === `${res.path}`
                            ? "font-bold border-b-2"
                            : ""
                    }>
                    <Link
                        href={res.path}>
                        {res.label}
                    </Link>
                </li>
            )}
        </ul>
    )
}

export default AccountNavBar