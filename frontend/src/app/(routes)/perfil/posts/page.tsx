'use client'
<<<<<<< HEAD
import AddPostCard from '../../../../components/PostsCards/AddPostCard'
import deletePost from '../../../../utils/postRequest/deletePost'
import getUserPost from '../../../../utils/postRequest/getUserPosts'
import React, { useEffect, useState } from 'react'
=======
import AddPostCard from '@/components/Cards/AddPostCard';
import getPost from '@/utils/postRequest/getPost';
import { useEffect, useState } from 'react';

interface dataType {
    id: string,
    imagen: {
        name: {
            imagenUrl: string;
        };
    };
}
>>>>>>> nahu

const pagePost = () => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
<<<<<<< HEAD
        data ? {} : getUserPost(setData, token)
=======
        !data ? {} : getPost(setData)
>>>>>>> nahu
    }, [data])

    return (
        <section className='flex flex-wrap gap-5'>
            <div className='min-h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

<<<<<<< HEAD
            {data[0] ? data.map(res =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'
                >
                    <span className='hover:text-red-500 text-2xl absolute cursor pointer'
                        onClick={() => {
                            const token = localStorage.getItem('tKeyId');
                            deletePost(res.id, token)
                        }}>x</span>
                    <img src={res.imagen ? res.imagen.imagenUrl : ''} alt="" className='rounded-md object-cover' />
=======
            {data.length !== 0 && data.map(res =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'>
                    {res.imagen.name.imagenUrl}
>>>>>>> nahu
                </div>
            )}
        </section>
    )
}

export default pagePost