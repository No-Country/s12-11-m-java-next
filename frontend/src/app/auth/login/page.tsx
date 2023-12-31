'use client'
import loginPost from '@/utils/loginRequest/loginPost'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"

const LoginPage = () => {
    const [userData, setUserData] = useState({})
    const router = useRouter()
    return (
        <section className='text-white flex'>
            <article className='text-white flex flex-col p-8 w-1/2'>
                <Link href='/' className='flex items-center gap-4 pl-3'>
                    <FaArrowLeft />
                    <p>Volver</p>
                </Link>
                <div className=' mt-10 flex flex-col h-full justify-center items-center'>
                    <div className='mb-9'>
                        <h1 className='text-4xl font-bold mb-2'>Bienvenido!</h1>
                        <p className='font-semibold'>Inicia sesion para una experiencia completa</p>
                    </div>
                    <form className='flex flex-col gap-6 my-9 w-[60%]' onSubmit={(e) => {
                        e.preventDefault();
                        loginPost(userData, router);
                    }}>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                                className='p-2 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="text"
                                placeholder='Email' required />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Contraseña</label>
                            <input onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                                className='p-2 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="password"
                                placeholder='Contraseña' required />
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-rosa text-black rounded-full px-10 py-2 font-bold'>Iniciar sesión</button>
                        </div>
                    </form>
                    <Link href='/auth/register'>Registrarme</Link>
                </div>
            </article>
            <Image priority src='/auth_bg.jpg' width={50000} height={500000} alt='Background image'
                className='object-cover left-30 h-screen w-1/2' />
        </section>
    )
}

export default LoginPage