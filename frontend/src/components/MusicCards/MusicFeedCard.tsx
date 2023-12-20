"use client"
import getFeedMusic from "@/utils/musicRequest/getFeedMusic"
import { useEffect, useState } from "react"
import { FaCirclePlay } from "react-icons/fa6"
import AudioPlayer from "../Discover/Audioplayer"
import { type MusicResponse } from "@/interfaces/musicResponse.interface"

const MusicFeedCard = () => {
  const [data, setData] = useState<MusicResponse[] | null>(null)
  const token = localStorage.getItem("tKeyId")

  useEffect(() => {
    getFeedMusic(setData, token).catch((e: Error) => {
      console.error(e)
    })
  }, [])

  return (
    <>
      {data != null ? (
        data?.map((res) => (
          <ul
            key={res.id}
            className="flex w-full list-none gap-5 border-b-2 h-12 items-center px-4"
          >
            <button>
              <FaCirclePlay />
            </button>
            <li className="w-full">{res.titulo}</li>
            <li className="min-w-[55px] text-center ">{res.genero}</li>
            {/* <li className="min-w-[67px] text-center">{res.audioUrl}</li> */}
            {/* <audio
              src={`https://stereos.fly.dev/music/panic_show.mp3`}
              controls
            /> */}
          </ul>
        ))
      ) : (
        <></>
      )}
      <span className="h-16 text-center">...</span>
      <div className="fixed bottom-0 left-0 h-14 w-full bg-rosa text-negro">
        <AudioPlayer />
      </div>
    </>
  )
}

export default MusicFeedCard
