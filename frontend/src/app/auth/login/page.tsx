import Link from 'next/link'

const LoginPage = () => {
    return (
        <div className='bg-[#151515] text-white flex flex-col p-8'>
            <Link href='/home'>Volver</Link>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='mb-9'>
                    <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                    <p>Inicia sesion para una experiencia completa</p>
                </div>
                <form className='flex flex-col gap-6 mb-5 w-2/4'>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="text" placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Contraseña</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="password" placeholder='Contraseña' />
                    </div>
                    <button className='bg-[#DCC6E0] text-black rounded-full p-2'>Iniciar sesión</button>
                </form>
                <Link href='/auth/register'>Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginPage