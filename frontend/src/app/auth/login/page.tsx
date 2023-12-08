'use client'
import Image from 'next/image'
import Link from 'next/link'
import bgImage from "../../../assets/img/background.jpg"
import { useRouter } from 'next/navigation'
import loginPost from '@/utils/loginRequest/loginPost'
import { useState } from 'react'
const LoginPage = () => {
    const [userData, setUserData] = useState({
        email: "artista13@gmail.com",
        password: "Ae12345+"
    })
    const router = useRouter()
    return (
        <section className='flex h-screen'>
            <div className=' text-white flex flex-col h-full w-1/2'>
                <Link href='/home' className='p-8'>Volver</Link>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className='mb-9'>
                        <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                        <p>Inicia sesion para una experiencia completa</p>
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
                            <button className='bg-rosa text-black rounded-full px-14 py-3 font-bold' >Iniciar sesión</button>
                        </div>
                    </form>
                    <Link href='/auth/register'>Registrarme</Link>
                </div>
            </div>
            <div className='md:flex fixed h-screen left-2/4 w-full hidden'>
                <Image src={bgImage} alt='Background image' className='object-cover' />
            </div>
        </section>
    )
}

export default LoginPage