import { genres } from '../../utils/genres';

// interface GenreProps {
//   selectedGenre: string | null;
//   setSelectedGenre: React.Dispatch<React.SetStateAction<string | null>>;
// }

export const Genres = () => {

  return (
    <section className="grid gap-4 py-6">
      <h2 className="text-lg">Géneros musicales</h2>
      <div className="flex gap-4 overflow-x-hidden">
        {genres.map((genre) => (
          <button
            // onClick={() => { setSelectedGenre(genre.title) }}
            key={genre.id}
            className="bg-negro px-6 py-2 rounded-md"
          >
            {genre.title}
          </button>
        ))}
      </div>
    </section>
  )
}
