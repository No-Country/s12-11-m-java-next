'use client'
import AddPostCard from '@/components/Cards/AddPostCard'
import getPost from '@/utils/postRequest/getPost'
import React, { useEffect, useState } from 'react'

const pagePost = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        getPost(setData, token)
    }, [data])
    return (
        <section className='flex flex-wrap gap-5'>
            <div className='h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

            {data[0] ? data.map(res =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'>
                    {res.imagen.name.imagenUrl}
                </div>
            ) : <></>}
        </section>
    )
}

export default pagePost