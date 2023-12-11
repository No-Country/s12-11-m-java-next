import Image from 'next/image'
import React from 'react'
import img from '../../../public/auth_bg.jpg'
const EventCard = () => {
    return (
        <article className='flex h-36 w-96 items-center gap-5 bg-slate-200 rounded-md px-4 py-4 text-negro justify-between'>
            <Image src={img} alt='' className=' h-28 w-28 object-cover rounded-md' />
            <ul className='flex flex-col list-none gap-5'>
                <li>titulo</li>
                <li>lugar</li>
                <li>hora - fecha</li>
            </ul>
            <button className='px-4 py-2 bg-rosa rounded-full self-end'>details</button>
        </article>
    )
}

export default EventCard