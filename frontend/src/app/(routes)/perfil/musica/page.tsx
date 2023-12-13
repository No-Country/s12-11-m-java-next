import AddMusicCard from '@/components/Cards/AddMusicCard'

const pageMusica = () => {
    return (
        <div className='flex w-full h-full'>
            <div className='w-1/2 border-r-2 min-h-[20vh] h-full flex flex-col pr-5'>
                <span className='text-white pb-5'>Canciones</span>
                <span className='flex pb-2 border-b-2 text-white justify-end gap-5'>
                    <span>Genero</span> <span>Duración</span>
                </span>
                <AddMusicCard />
            </div>
            <div className='w-1/2 border-l-1 min-h-[20vh] h-full flex flex-col pl-5'>
                <span>albunes</span>
            </div>
        </div>
    )
}

export default pageMusica