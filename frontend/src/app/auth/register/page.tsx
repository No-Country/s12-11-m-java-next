'use client'
import { Switch } from "@/components/swich/switch";
import Link from "next/link";



export default function SingUpPage() {
    return (
        <>
            <main className="relative min-h-screen flex justify-center">
                <div className="w-full h-[370px] bg-[#DEDEDE]"></div>
                <form className="absolute  max-w-4xl top-[8%] rounded-md w-full ">
                    <h1 className="text-4xl font-semibold text-center">CREAR CUENTA</h1>
                    <div className="bg-[#EDEDED] border-2 border-gray-500 mt-16 p-2 rounded-2xl">
                        <div className="max-w-md w-full mb-10 m-auto">
                            <div className=" m-auto flex flex-col gap-3 mt-12 w-full">
                                <label className="text-black font-semibold">Email</label>
                                <input className="p-2 rounded-md w-full border-gray-500 border-2 outline-none" />
                            </div>
                            <div className=" m-auto flex flex-col gap-3 mt-5 w-full">
                                <label className="text-black font-semibold">Contraseña</label>
                                <input className="p-2 rounded-md w-full border-gray-500 border-2 outline-none" />
                            </div>
                            <div className=" m-auto flex flex-col gap-3 mt-5 w-full">
                                <label className="text-black font-semibold">Repetir contraseña</label>
                                <input className="p-2 rounded-md w-full border-gray-500 border-2 outline-none" />
                            </div>
                            <div className="flex gap-3 items-center">
                                <Switch />
                                <p className="font-semibold">Recordarme</p>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-max  w-full mt-12 m-auto">
                        <Link href={'/auth/registerSuccess'} className=" w-full py-3 px-16 rounded-3xl font-semibold  bg-gray-200">
                            CONTINUAR
                        </Link>
                    </div>
                </form>
            </main>
        </>
    )
}
