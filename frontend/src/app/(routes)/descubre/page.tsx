import { Genres } from "@/components/descubre/Genres"
import { FaSearch } from "react-icons/fa"
import Artist from "@/components/descubre/Artist"
import { Song } from "@/components/descubre/Song"

const pageDescubre = () => {
  const data = [1, 3, 4, 5, 6, 7]

  return (
    <main className="max-w-[1440px] m-auto mb-20 px-4">
      <div className="flex items-center border-2 mt-14 rounded-md gap-3 p-2 max-w-sm  w-full m-auto">
        <FaSearch />
        <input className="w-full bg-transparent" />
      </div>
      <section className="w-full relative py-8">
        <h2 className="text-2xl font-semibold">Artistas destacados</h2>

        <div className="flex mt-4 gap-4 overflow-hidden">
          {data.map((item) => (
            <Artist key={item} />
          ))}
        </div>
      </section>
      <Genres />
      <section className="grid gap-4 py-8">
        <h2 className="text-xl">Canciones</h2>
        <Song />
        <Song />
        <Song />
        <Song />
      </section>
      <div className="fixed bottom-0 left-0 h-14 w-full bg-white"></div>
    </main>
  )
}

export default pageDescubre
