'use client'
import registerPost from '@/utils/registerRequest/registerPost'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa"
import Image from 'next/image'
export default function SingUpPage() {
    const router = useRouter()
    const [userData, setUserData] = useState({
        email: "artista13@gmail.com",
        password: "Ae12345+",
        rol: "ARTISTA",
        nombreArtistico: "Shakira",
        descripcion: "Lero lo lei lo lei"
    })

    return (
        <section className='text-white flex w-full h-screen'>
            <article className='text-white w-1/2 flex flex-col p-8'>
                <div className='flex items-center gap-4 pl-3'>
                    <FaArrowLeft />
                    <Link href='/home'>Volver</Link>
                </div>
                <div className='flex flex-col h-full justify-center items-center'>
                    <div className='mb-6'>
                        <h1 className='text-5xl font-bold mb-2'>Bienvenido!</h1>
                        <p className='font-bold'>Crea una cuenta para comenzar</p>
                    </div>
                    <form className='flex flex-col gap-6  w-[60%]' onSubmit={(e) => {
                        e.preventDefault();
                        registerPost(userData, router);
                    }}>
                        <div className='flex flex-col gap-2'>
                            <label>Nombre artístico</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="text" placeholder='Nombre' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="text" placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Contraseña</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="password" placeholder='Contraseña' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Repetir contraseñaa</label>
                            <input className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa' type="password" placeholder='Contraseña' />
                        </div>
                        <div className='flex justify-center'>
                            <button className='bg-rosa text-black rounded-full px-14 py-3 font-bold'>Registrarme</button>
                        </div>
                    </form>
                    <Link href='/auth/login' className='mt-5'>Iniciar sesión</Link>
                </div>
            </article>
            <Image src='/auth_bg.jpg' width={50000} height={500000} alt='Background image'
                className='object-cover left-30 h-screen w-1/2' />
        </section>
    )
}
