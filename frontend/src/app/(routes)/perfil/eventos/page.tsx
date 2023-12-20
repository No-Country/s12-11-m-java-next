'use client'
import AddEventCard from '@/components/EventsCards/AddEventCard'
import EventCard from '@/components/EventsCards/EventCard'
import getUserEvents from '@/utils/eventsRequest/getUserEvents'
import { useEffect, useState } from 'react'

interface dataType {
    idEvento: string
}

const pageEventos = () => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        getUserEvents(setData, token)
    }, [data])

    return (
        <div className={`flex gap-[2.4rem] flex-wrap max-w-[1500px]  w-full self-center ${data.length >= 2 ? 'justify-center' : 'justify start'}`} >
            <AddEventCard />

            {data.length !== 0 && data.map(res => (
                <EventCard key={res.idEvento} data={res} />
            ))}
        </div>
    )
}

export default pageEventos