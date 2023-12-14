import { Albums } from "@/components/Albums/Albums"
import AddMusicCard from "@/components/Cards/AddMusicCard"
import MusicFeedCard from "@/components/Cards/MusicFeedCard"

const pageMusica = () => {
  return (
    <main className="w-full max-w-[1440px] m-auto flex justify-between">
      <section className="w-1/2 border-r-2 flex flex-col pr-5">
        <h3 className="text-white pb-2">Canciones</h3>
        <ul className="flex pb-2 border-b-2 text-white justify-end gap-5 pr-4 list-none">
          <li>Genero</li>
          <li>Duración</li>
        </ul>
        <AddMusicCard />
        <MusicFeedCard />
      </section>
      <section className="w-1/2 pl-20">
        <h3>Albumes</h3>
        <Albums />
      </section>
    </main>
  )
}

export default pageMusica
