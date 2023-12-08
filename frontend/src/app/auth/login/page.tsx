'use client'
import Image from 'next/image'
import Link from 'next/link'
import bgImage from "../../../assets/img/background.jpg"
import { useRouter } from 'next/navigation'
import loginPost from '@/utils/loginRequest/loginPost'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: "artista13@gmail.com",
        password: "Ae12345+"
    })
    const router = useRouter()
    return (
        <section className=' text-white flex flex-col w-1/2 h-screen'>
            <div className='flex items-center self-start pt-8 pl-5'>
                <FaArrowLeft />
                <Link href='/home' className='pl-1 self-start'>Volver</Link>
            </div>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='mb-9'>
                    <h1 className='text-5xl font-bold mb-2'>Bienvenido!</h1>
                    <p className='font-bold'>Inicia sesion para una experiencia completa</p>
                </div>
                <form className='flex flex-col gap-6 my-9 w-[60%]' onSubmit={(e) => {
                    e.preventDefault();
                    loginPost(userData);
                    router.push('/descubre')
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
        </section>
    )
}

export default LoginPage