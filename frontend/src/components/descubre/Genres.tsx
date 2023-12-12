import Link from "next/link"

export const Genres = () => {
  const genres = [
    { id: 1, title: "Rock" },
    { id: 2, title: "Pop" },
    { id: 3, title: "Electronic" },
    { id: 4, title: "Reggae" },
    { id: 5, title: "Jazz" },
    { id: 6, title: "Rap" },
    { id: 7, title: "Salsa" },
    { id: 8, title: "Disco" },
  ]

  return (
    <section className="grid gap-4 py-12">
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
