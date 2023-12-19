'use client'
import AddEventCard from '@/components/EventsCards/AddEventCard'
import EventCard from '@/components/EventsCards/EventCard'
import getUserEvents from '@/utils/eventsRequest/getUserEvents'
import React, { useEffect, useState } from 'react'

const pageEventos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        getUserEvents(setData, token)
    }, [data])
    return (
        <div className={`flex gap-[2.4rem] flex-wrap max-w-[1500px] w-full self-center ${data[0] ? data.length >= 2 ? 'justify-center' : 'justify-start' : 'justify start'}`} >
            <AddEventCard />

            {data[0] ? data.map(res => (
                <EventCard key={res.idEvento} data={res} />
            )) : <></>}
        </div>
    )
}

export default pageEventos