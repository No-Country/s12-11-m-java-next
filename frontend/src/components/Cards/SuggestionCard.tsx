import React from "react"

function SuggestionCard() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h4>Sugerencias para ti </h4>
      {/* deberia ser una imagen */}
      <div className="bg-gray-300 w-20 h-20 rounded-xl mt-2 mb-1"></div>
      <h5 className="uppercase mb-1 ">nombre y apellido</h5>
      <span>TIPO DE USER</span>
      <button className="px-5 py-2 mt-2 bg-slate-200 rounded-2xl">
        Seguir
      </button>
    </div>
  )
}

export default SuggestionCard
