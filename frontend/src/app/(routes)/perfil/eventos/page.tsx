'use client'
import AddEventCard from '@/components/Cards/AddEventCard'
import EventCard from '@/components/Cards/EventCard'
import getEvents from '@/utils/getEvents/getEvents'
import React, { useEffect, useState } from 'react'

const pageEventos = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7])
    useEffect(() => {
        data[0] ? {} : getEvents(setData)
    }, [data])
    return (
        <div className={`flex gap-[2.4rem] flex-wrap max-w-[1500px] w-full self-center ${data.length >= 2 ? 'justify-center' : 'justify-start'}`} >
            <AddEventCard />
            {data.map(res => (
                <EventCard key={res.idEvento} data={res} />
            ))}
        </div>
    )
}

export default pageEventos