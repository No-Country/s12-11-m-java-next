import { AddAlbum } from '@/components/Albums/AddAlbum'
import AddPostCard from '@/components/Cards/AddPostCard'
import React from 'react'

const pagePost = () => {
    const data = [1, 2, 3, 4, 5, 6]
    return (
        <section className='flex flex-wrap gap-5'>
            <div className='h-[200px] w-[200px]' >
                <AddPostCard />
            </div>

            {data.map(res =>
                <div key={res} className='h-[200px] w-[200px] bg-white rounded-md'>
                    z
                </div>
            )}
        </section>
    )
}

export default pagePost