import Link from "next/link";

export default function SingUpPage () {
    return (
        <div className='bg-[#151515] text-white flex flex-col p-8'>
            <Link href='/home'>Volver</Link>
            <div className='flex flex-col h-full justify-center items-center'>
                <div className='mb-9'>
                    <h1 className='text-2xl font-bold mb-2'>Bienvenido!</h1>
                    <p>Crea una cuenta para comenzar</p>
                </div>
                <form className='flex flex-col gap-6 mb-5 w-2/4'>
                    <div className='flex flex-col gap-2'>
                        <label>Nombre artístico</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="text" placeholder='Nombre' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Email</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="text" placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Contraseña</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="password" placeholder='Contraseña' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Repetir contraseñaa</label>
                        <input className='p-3 bg-[#151515] border-2 rounded-xl border-gray-700' type="password" placeholder='Contraseña' />
                    </div>
                    <button className='bg-[#DCC6E0] text-black rounded-full p-2'>Registrarme</button>
                </form>
                <Link href='/auth/login'>Iniciar sesión</Link>
            </div>
        </div>
    )
}
