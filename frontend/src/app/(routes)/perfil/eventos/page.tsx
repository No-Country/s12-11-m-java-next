'use client'
import AddEventCard from '@/components/Cards/AddEventCard'
import EventCard from '@/components/Cards/EventCard'
import getAllEvents from '@/utils/eventsRequest/getAllEvents'
import getFeedEvents from '@/utils/eventsRequest/getFeedEvents'
import React, { useEffect, useState } from 'react'

const pageEventos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        getFeedEvents(setData, token)
    }, [data])
    return (
        <div className={`flex gap-[2.4rem] flex-wrap max-w-[1500px] w-full self-center ${data[0] ? data.length >= 2 ? 'justify-center' : 'justify-start' : 'justify start'}`} >
            <AddEventCard />

            {/* {data[0] ? data.map(res => (
                <EventCard key={res.idEvento} data={res} />
            )) : <></>} */}
        </div>
    )
}

export default pageEventos