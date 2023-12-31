'use client'
import AddEventCard from '@/components/Cards/AddEventCard'
import EventCard from '@/components/Cards/EventCard'
import getFeedEvents from '@/utils/eventsRequest/getFeedEvents'
import React, { useEffect, useState } from 'react'

const pageEventos = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6])
    useEffect(() => {
        data[0] ? {} :
            getFeedEvents()
                .then(res => setData(res))
                .catch((err) => console.log(err));
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