import AddMusicCard from '@/components/Cards/AddMusicCard'
import MusicFeedCard from '@/components/Cards/MusicFeedCard'

const pageMusica = () => {
    return (
        <section className='flex w-full h-full'>
            <article className='w-1/2 border-r-2 min-h-[20vh] h-full flex flex-col pr-5'>
                <h3 className='text-white pb-2'>Canciones</h3>
                <ul className='flex pb-2 border-b-2 text-white justify-end gap-5 pr-4 list-none'>
                    <li>Genero</li>
                    <li>Duración</li>
                </ul>
                <AddMusicCard />
                <MusicFeedCard />
            </article>
            <article className='w-1/2 border-l-1 min-h-[20vh] h-full flex flex-col pl-5'>
                <h3>Albunes</h3>
            </article>
        </section>
    )
}

export default pageMusica