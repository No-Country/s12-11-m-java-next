'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../../public/auth_bg.jpg'
import deleteEvent from '@/utils/eventsRequest/deleteEvent'
const EventCard = (res: any) => {
    const [Id, setId] = useState()
    useEffect(() => {
        setId(res.data.idEvento)
    }, [res])
    const eliminarArtista = () => {
        const token = localStorage.getItem('tKeyId')
        deleteEvent(Id, token)
    }

    return (
        <article className='flex min-h-42 h-full w-[450px] items-center gap-5 bg-slate-200 rounded-md px-4 py-4 text-negro justify-between'>
            <Image src={img} alt='' className=' h-28 w-28 object-cover rounded-md' />
            <div className='flex flex-col'>
                <ul className='flex flex-col list-none gap-5'>
                    <li>{res.data.titulo}</li>
                    <li>{res.data.lugar} - Precio: {res.data.precio}</li>
                    <li>{res.data.hora} - {res.data.fechaEvento}</li>
                </ul>
                <div className='flex gap-5 mt-2'>
                    <button className='px-4 py-2 hover:bg-red-200 border-2 border-red-500 rounded-full self-end'
                        onClick={eliminarArtista}>Eliminar</button>
                    <button className='px-5 py-2 hover:bg-rosa rounded-full border-2 border-rosa self-end'>Details</button>
                </div>
            </div>
        </article>
    )
}

export default EventCard