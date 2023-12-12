'use client'
import AddEventCard from '@/components/Cards/AddEventCard'
import EventCard from '@/components/Cards/EventCard'
import getEvents from '@/utils/getEvents/getEvents'
import React, { useEffect, useState } from 'react'

const pageEventos = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5])
    useEffect(() => {
        data[0] ? {} : getEvents(setData)
    }, [data])
    return (
        <div className='flex gap-5 flex-wrap justify-center'>
            <AddEventCard />
            {data.map(res => (
                <EventCard key={res.idEvento} data={res} />
            ))}
        </div>
    )
}

export default pageEventos