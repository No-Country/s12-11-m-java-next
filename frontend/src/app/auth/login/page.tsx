'use client'
import loginPost from '@/utils/loginRequest/loginPost'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"
import Image from 'next/image'
const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: "artista13@gmail.com",
        password: "Ae12345+"
    })
    const router = useRouter()
    return (
        <section className='text-white flex'>
            <article className='text-white flex flex-col p-8 w-1/2'>
                <div className='flex items-center gap-4 pl-3'>
                    <FaArrowLeft />
                    <Link href='/'>Volver</Link>
                </div>
                <div className=' mt-10 flex flex-col h-full justify-center items-center'>
                    <div className='mb-9'>
                        <h1 className='text-5xl font-bold mb-2'>Bienvenido!</h1>
                        <p className='font-bold'>Inicia sesion para una experiencia completa</p>
                    </div>
                    <form className='flex flex-col gap-6 my-9 w-[60%]' onSubmit={(e) => {
                        e.preventDefault();
                        loginPost(userData, router);
                    }}>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="text" placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Contraseña</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="password" placeholder='Contraseña' />
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-rosa text-black rounded-full px-14 py-3 font-bold'>Iniciar sesión</button>
                        </div>
                    </form>
                    <Link href='/auth/register'>Registrarme</Link>
                </div>
            </article>
            <Image src='/auth_bg.jpg' width={50000} height={500000} alt='Background image'
                className='object-cover left-30 h-screen w-1/2' />
        </section>
    )
}

export default LoginPage