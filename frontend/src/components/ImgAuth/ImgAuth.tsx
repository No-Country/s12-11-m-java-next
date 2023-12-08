import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ImgAuth = () => {
    const pathname = usePathname()
    return (
        pathname !== '/auth/configPerfil' ?
            <div className='md:flex fixed h-screen left-2/4 w-full hidden'>
                <Image src='/auth_bg.jpg' fill alt='Background image' className='object-cover' />
            </div>
            : <></>
    )
}

export default ImgAuth