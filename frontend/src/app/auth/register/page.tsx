import Link from 'next/link'

export default function SingUpPage () {
    return (
        <div className='text-white flex flex-col p-8'>
            <Link href='/home'>Volver</Link>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='mb-9'>
                    <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                    <p>Crea una cuenta para comenzar</p>
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
        </div>
    )
}
