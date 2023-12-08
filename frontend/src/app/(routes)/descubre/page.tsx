'use client'
import postEvents from '@/utils/postEvents/postEvents'
import { useState } from 'react'

const pageDescubre = () => {
    const [eventData, setEventData] = useState({
        titulo: 'el evento de joa',
        lugar: 'cba',
        hora: '22:30',
        precio: 5000,
        fechaEvento: '2022-11-11',
        descripcion: 'nose que poner aca',
    })
    return (
        <form action="" onSubmit={(e) => {
            e.preventDefault();
            postEvents(eventData)
        }}>
            <button>subir post</button>
        </form>

    )
}

export default pageDescubre