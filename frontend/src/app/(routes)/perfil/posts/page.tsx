'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import AddPostCard from '../../../../components/PostsCards/AddPostCard'
import deletePost from '../../../../utils/postRequest/deletePost'
import getUserPost from '../../../../utils/postRequest/getUserPosts'

interface dataType {
    id: string,
    imagen: {
        name: {
            imagenUrl: string;
        };
    };
}

const pagePost = () => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        getUserPost(token, setData).catch((e: Error) => {
            console.error(e)
        })

    }, [])

    return (
        <section className='flex flex-wrap gap-5'>
            <div className='min-h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

            {data.length !== 0 && data.map((res: any) =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'
                >
                    <span className='hover:text-red-500 text-2xl absolute cursor pointer'
                        onClick={() => {
                            const token = localStorage.getItem('tKeyId');
                            deletePost(res.id, token).catch((e: Error) => {
                                console.error(e)
                            })
                        }}>x</span>
                    <Image width={200} height={200} src={res.imagen.imagenUrl} alt="" className='rounded-md object-cover' />
                </div>
            )}
        </section>
    )
}

export default pagePost