'use client'
import getEvents from "@/utils/getEvents/getEvents"
import Image from "next/image"
import { useEffect, useState } from "react"

function FeedCard() {
  const [data, setData] = useState([])
  useEffect(() => {
    data[0] ? {} : getEvents(setData)
  }, [data])
  console.log(data);

  return (
    <>
      <article className="flex flex-col w-full gap-10 py-5 items-center" >
        {data.map(res => (
          <div key={res.idEvento}
            className="flex flex-col border p-6 border-black roun rounded-3xl w-full min-w-[280px] max-w-[800px] h-auto bg-white text-black gap-2">
            <div className="flex items-center gap-4">
              <Image src='/auth_bg.jpg' width='48' height='48' alt="" className="w-12 h-12 rounded-full" />
              <h3>{res.titulo}</h3>
            </div>
            <p className="">
              {res.descripcion}
            </p>
            <p className="">
              Dia del evento: {res.fechaEvento} - Hora: {res.hora}
            </p>
            <p className="">
              Ubicación: {res.lugar} - Costo: ${res.precio}
            </p>
            {/* deberia ser una imagen */}
            <div className="bg-gray-300 w-full h-full rounded-xl"> </div>
          </div>
        ))}
      </article>
    </>
  )
}

export default FeedCard
