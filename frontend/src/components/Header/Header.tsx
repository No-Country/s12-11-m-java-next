import { LinkHeader } from '@/utils/Links'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
    return (
        <header className='p-1 h-20 flex flex-row items-center'>
            <span className='ml-2 w-14 h-14 rounded-full bg-black text-white flex justify-center items-center'>logo</span>
            <ul className='flex flex-row gap-5 ml-36'>
                {LinkHeader.map(res =>
                    <li key={res.label}><Link href={res.path}>{res.label}</Link></li>
                )}
            </ul>
        </header>
    )
}

