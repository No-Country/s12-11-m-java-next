export const Album = () => {
  return (
    <div className="w-full h-full aspect-square flex flex-col gap-2 justify-center">
      <button className="w-full h-full bg-white rounded-lg overflow-hidden">
        <picture>
          <img src="" alt="" className="object-cover w-full h-full" />
        </picture>
      </button>
      <ul className="text-center">
        <li className="sm">Title album</li>
        <li className="text-xs">2023</li>
      </ul>
    </div>
  )
}
