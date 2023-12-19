"use client"
import getFeedMusic from "@/utils/musicRequest/getFeedMusic"
import { useEffect, useState } from "react"
import { FaCirclePlay } from "react-icons/fa6"
import AudioPlayer from "../Discover/Audioplayer"

const MusicFeedCard = () => {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

  useEffect(() => {
    data[0] ? {} : getFeedMusic(setData)
  }, [data])

  return (
    <>
      {data.map((res) => (
        <ul
          key={res}
          className="flex w-full list-none gap-5 border-b-2 h-12 items-center px-4"
        >
          <button>
            <FaCirclePlay />
          </button>
          <li className="w-full">Nombre de la canción</li>
          <li className="min-w-[55px] text-center ">Rock</li>
          <li className="min-w-[67px] text-center">2:00</li>
        </ul>
      ))}
      <span className="h-16 text-center">...</span>
      <div className="fixed bottom-0 left-0 h-14 w-full bg-rosa text-negro">
        <AudioPlayer />
      </div>
    </>
  )
}

export default MusicFeedCard
