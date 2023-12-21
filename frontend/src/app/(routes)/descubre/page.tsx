'use client'
// import Artist from "@/components/Discover/Artist"
import AudioPlayer from '@/components/Discover/Audioplayer'
import { Genres } from "@/components/Discover/Genres"
import Music from '@/components/Discover/Music'
import { FaSearch } from "react-icons/fa"

const pageDescubre = () => {

    return (
        <main className="w-full relative mb-20 h-full pt-[80px]">
            <div className="flex items-center border-2 border-rosa mt-10 rounded-xl gap-3 p-2 max-w-sm  w-full m-auto">
                <FaSearch className='text-rosa' />
                <input className="w-full bg-transparent outline-none" />
            </div>
            <section className="p-4 w-full h-52 relative overflow-hidden text-center">
                <div className="w-full flex gap-4 absolute justify-center ">
                    <Genres />
                </div>
            </section>
            <section className="full p-6">
                <Music />
            </section>
            <div className="fixed bottom-0 left-0 h-14 w-full bg-rosa text-negro">
                <AudioPlayer />
            </div>
        </main>
    )
}

export default pageDescubre
