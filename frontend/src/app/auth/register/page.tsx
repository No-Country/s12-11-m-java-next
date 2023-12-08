'use client'
import Image from 'next/image'
import Link from 'next/link'
import bgImage from "../../../assets/img/background.jpg"
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
        <section className='w-full h-screen flex'>
            <div className=' text-white flex flex-col  h-full w-1/2'>
                <div className='flex flex-col h-full justify-center items-center '>
                    <div className='flex'>
                        <FaArrowLeft />
                        <Link href='/home' className='p-8 self-start'>Volver</Link>
                    </div>
                    <div className='mb-5'>
                        <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                        <p>Crea una cuenta para comenzar</p>
                    </div>
                    <form className='flex flex-col gap-6 my-9 w-[60%]' onSubmit={(e) => {
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
                    <Link href='/auth/login'>Iniciar sesión</Link>
                </div>
                <div className='md:flex fixed h-screen left-2/4 w-full hidden'>
                    <Image src={bgImage} alt='Background image' className='object-cover' />
                </div>
            </div>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='mb-9'>
                    <h1 className='text-5xl font-bold mb-2'>Bienvenido!</h1>
                    <p className='font-bold'>Crea una cuenta para comenzar</p>
                </div>
                <form className='flex flex-col gap-6 my-9 w-[60%]'>
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
                <Link href='/auth/login'>Iniciar sesión</Link>
            </div>
        </section>
    )
}
