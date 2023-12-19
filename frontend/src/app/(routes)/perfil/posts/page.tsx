'use client'
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

const pagePost = () => {
    const [data, setData] = useState<dataType[]>([])

    useEffect(() => {
        const token = localStorage.getItem('tKeyId')
        !data ? {} : getPost(setData)
    }, [data])

    return (
        <section className='flex flex-wrap gap-5'>
            <div className='h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

            {data.length !== 0 && data.map(res =>
                <div key={res.id} className='h-[200px] w-[200px] bg-white rounded-md'>
                    {res.imagen.name.imagenUrl}
                </div>
            )}
        </section>
    )
}

export default pagePost