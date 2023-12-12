import { Genres } from "@/components/descubre/Genres"
import { Music } from "@/components/music/Music"
import { FaSearch } from "react-icons/fa";
import Artist from "@/components/descubre/Artist";
import PlayMusic from "@/components/descubre/PlayMusic";


const pageDescubre = () => {

    const data = [1, 3, 4, 5, 6, 7]

    return (
        <main className="w-full relative  mb-20">
            <div className="flex items-center border-2 mt-14 rounded-md gap-3 p-2 max-w-sm  w-full m-auto">
                <FaSearch />
                <input className="w-full bg-transparent outline-none" />
            </div>
            <section className="p-4 w-full h-96 relative overflow-hidden">
                <h2 className="text-2xl font-semibold">Artistas destacados</h2>

                <div className="flex mt-4 gap-4 absolute justify-start ">
                    {
                        data.map(item => (
                            <Artist key={item} />
                        ))
                    }
                </div>
            </section>
            <section className="p-4 w-full h-52 relative overflow-hidden">
                <h2>Generos Musicales</h2>
                <div className="flex mt-4 gap-4 absolute justify-start ">
                    {
                        data.map(item => (
                            <Genres key={item} />
                        ))
                    }
                </div>
            </section>
            <section className="full p-4">
                <h2 className="text-2xl font-semibold">Musica</h2>
                <div className="flex flex-col gap-3 w-full">
                    {
                        data.map(item => (
                            <PlayMusic key={item} />
                        ))
                    }
                </div>
            </section>
            <div className="fixed bottom-0 left-0 h-14 w-full bg-white text-negro">
                <p>
                    reproductor
                </p>
            </div>
        </main>
    )
}

export default pageDescubre