'use client'
import getEvents from '@/utils/getEvents/getEvents'
import postEvents from '@/utils/postEvents/postEvents'
import React, { useEffect, useState } from 'react'

const pageDescubre = () => {
    const [eventData, setEventData] = useState({
        titulo: 'el evento de joa',
        lugar: 'cba',
        hora: '22:30',
        precio: 5000,
        fechaEvento: '2022-18-11',
        descripcion: 'nose que poner aca',
    })
    const [data, setData] = useState([])
    useEffect(() => {
        data[0] ? {} : getEvents(setData)
    }, [data])
    console.log(data);

    return (
        <div>{data.map(res =>
        (<div key={res.idEvento} className='flex flex-col gap-5'>
            <span>{res.titulo}</span>
            <span>{res.hora}</span>
            <span>{res.fechaEvento}</span>
            <span>{res.descripcion}</span>
        </div>)
        )}
            <form action="" onSubmit={(e) => {
                e.preventDefault();
                postEvents(eventData)
            }}>
                <button>subir post</button>
            </form>
        </div>

    )
}

export default pageDescubre