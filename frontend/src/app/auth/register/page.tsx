'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import registerPost from '@/utils/registerRequest/registerPost'
import { FaArrowLeft } from "react-icons/fa";
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
        <section className='w-1/2 h-screen flex text-white'>
            <div className='flex flex-col w-full h-full items-center '>
                <div className='flex items-center pt-8 self-start pl-5'>
                    <FaArrowLeft />
                    <Link href='/home' className='pl-1 self-start'>Volver</Link>
                </div>
                <div className='mb-5'>
                    <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                    <p>Crea una cuenta para comenzar</p>
                </div>
                <form className='flex flex-col gap-6  w-[60%]' onSubmit={(e) => {
                    e.preventDefault();
                    registerPost(userData);
                    router.push('/descubre')
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
        </section>
    )
}
