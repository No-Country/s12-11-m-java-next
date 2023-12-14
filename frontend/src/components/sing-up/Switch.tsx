"use client"
import { useState } from "react"

export default function Switch() {
  const [active, setActive] = useState<boolean>(false)

  const handleSwitch = () => {
    setActive(!active)
  }
  return (
    <div
      className={`rounded-2xl h-6 p-1 flex items-center my-5 w-12 duration-200  bg-white ${
        active ? "bg-green-600" : ""
      }`}
      onClick={handleSwitch}
    >
      <div
        className={`rounded-full w-5 h-5 bg-black  duration-300  ${
          active ? "translate-x-full bg-black" : ""
        }`}
      />
    </div>
  )
}
