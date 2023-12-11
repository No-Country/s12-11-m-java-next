import React from 'react'

const pageMusica = () => {
    return (
        <div className='flex w-full h-full'>
            <div className='w-1/2 border-r-2 min-h-[20vh] h-full flex flex-col pr-5'>
                <span>canciones</span>
            </div>
            <div className='w-1/2 border-l-1 min-h-[20vh] h-full flex flex-col pl-5'>
                <span>albunes</span>
            </div>
        </div>
    )
}

export default pageMusica