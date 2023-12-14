import { AddAlbum } from "./AddAlbum"
import { Album } from "./Album"

export const Albums = () => {
  const data = [1, 3, 4, 5, 6, 7, 8]

  return (
    <div className="grid grid-cols-auto gap-4 pt-8">
      <AddAlbum />
      {data.map((album) => (
        <Album key={album} />
      ))}
    </div>
  )
}
