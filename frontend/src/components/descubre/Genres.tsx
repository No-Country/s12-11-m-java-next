import Link from "next/link"
import { genres } from '../../utils/genres'
export const Genres = () => {

  return (
    <section className="grid gap-4 py-6">
      <h2 className="text-lg">Géneros musicales</h2>
      <div className="flex gap-4 overflow-x-hidden">
        {genres.map((genre) => (
          <Link
            href="#"
            key={genre.id}
            className="bg-negro px-6 py-2 rounded-md"
          >
            {genre.title}
          </Link>
        ))}
      </div>
      <Link href="#" className="text-sm text-right pr-4 underline">
        Ver más
      </Link>
    </section>
  )
}
