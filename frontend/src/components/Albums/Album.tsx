import { type AlbumsType } from "@/interfaces/album.interface"
import { type FunctionComponent } from "react"

export const Album: FunctionComponent<AlbumsType> = ({
  img,
  titulo,
  fechaPublicacion,
}) => {
  return (
    <div className="w-full h-full aspect-square flex flex-col gap-2 justify-center">
      <button className="w-full h-full bg-white rounded-lg overflow-hidden">
        <picture>
          <img src={img} alt="" className="object-cover w-full h-full" />
        </picture>
      </button>
      <ul className="text-center">
        <li className="sm">{titulo}</li>
        <li className="text-xs">{fechaPublicacion}</li>
      </ul>
    </div>
  )
}
