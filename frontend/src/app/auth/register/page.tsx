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
        nombreCompleto: "",
        apellidoCompleto: "",
        email: '',
        password: "",
        role: 'OYENTE'
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
                            <label>Nombre completo</label>
                            <input required
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        nombreCompleto: e.target.value
                                    })
                                }}
                                className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="text"
                                placeholder='Nombre' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Apellido completo</label>
                            <input required onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    apellidoCompleto: e.target.value
                                })
                            }}
                                className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="text"
                                placeholder='Contraseña' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Email</label>
                            <input required onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    email: e.target.value
                                })
                            }}
                                className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="email"
                                placeholder='Email' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Contraseña</label>
                            <input required onChange={(e) => {
                                setUserData({
                                    ...userData,
                                    password: e.target.value
                                })
                            }}
                                className='p-4 bg-transparent border-2 rounded-xl border-gray-rosa outline-none' type="password"
                                placeholder='Contraseña' />
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox" value="" className="sr-only peer"
                                onChange={(e) => {
                                    setUserData({
                                        ...userData,
                                        role: userData.role === 'OYENTE' ? 'ARTISTA' : 'OYENTE'
                                    })
                                }} />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{userData.role}</span>
                        </label>
                        <div className='flex justify-center'>
                            <button className='bg-rosa text-black rounded-full px-14 py-3 font-bold'>Registrarme</button>
                        </div>
                    </form>
                    <Link href='/auth/login' className='mt-5'>Iniciar sesión</Link>
                </div>
            </article>
            <Image priority src='/auth_bg.jpg' width={50000} height={500000} alt='Background image'
                className='object-cover left-30 h-screen w-1/2' />
        </section>
    )
}
