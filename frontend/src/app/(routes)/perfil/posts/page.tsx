'use client'
import AddPostCard from '@/components/Cards/AddPostCard'
import deletePost from '@/utils/postRequest/deletePost'
import getPost from '@/utils/postRequest/getPost'
import getUserPost from '@/utils/postRequest/getUserPosts'
import React, { useEffect, useState } from 'react'

const pagePost = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        data ? {} : getUserPost(setData, token)
    }, [data])
    return (
        <section className='flex flex-wrap gap-5'>
            <div className='min-h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

            {data[0] ? data.map(res =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'
                >
                    <span className='hover:text-red-500 text-2xl absolute cursor pointer'
                        onClick={() => {
                            const token = localStorage.getItem('tKeyId');
                            deletePost(res.id, token)
                        }}>x</span>
                    <img src={res.imagen ? res.imagen.imagenUrl : ''} alt="" className='rounded-md object-cover' />
                </div>
            ) : <></>}
        </section>
    )
}

export default pagePost