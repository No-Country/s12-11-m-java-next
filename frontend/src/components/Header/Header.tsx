import { LinkHeader } from '@/utils/Links'
import Link from 'next/link'

export const Header = () => {
    return (
        <header className='p-1 h-20 flex items-center justify-between bg-[#DEDEDE]'>
            <Link href='/' className='ml-2 w-14 h-14 rounded-full bg-black text-white flex justify-center items-center'>logo</Link>
            {/* <ul className='flex'> */}
            {LinkHeader.map(res =>
                <div key={res.label}><Link href={res.path}>{res.label}</Link></div>
            )}
            {/* </ul> */}
            <div>
                <Link className='mx-4' href='/auth/register'>CREAR CUENTA</Link>
                <Link className='mx-4 rounded-full bg-[#ABABAB] text-black p-4' href='/auth/login'>INICIAR SESIÓN</Link>
            </div>
        </header>
    )
}

