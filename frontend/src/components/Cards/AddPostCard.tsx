"use client"

import { useState } from "react"
import { genres } from "@/utils/genres"

const AddPostCard = () => {
    const years = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]

    const [isOpen, setIsOpen] = useState(false)

    const toggleModal = () => {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <div className="w-full h-auto aspect-square flex flex-col gap-2 justify-center">
                <button
                    className="flex flex-col w-full h-full bg-white rounded-lg overflow-hidden items-center justify-center"
                    onClick={toggleModal}
                >
                    <span className="text-4xl text-darkViolet">+</span>
                    <span className=" text-darkViolet">Agregar post</span>
                </button>
            </div>
            <dialog
                open={isOpen}
                onClose={toggleModal}
                className="fixed top-1/4 rounded-md"
            >
                <form
                    action=""
                    encType="multipart/form-data"
                    onReset={toggleModal}
                    // onSubmit={(e) => {
                    //   e.preventDefault()
                    //   const token = localStorage.getItem("tKeyId")
                    //   const formDataMusic = Object.fromEntries(
                    //     new FormData(e.currentTarget),
                    //   )
                    //   console.log(formDataMusic)
                    //   postMusica(closeModal, formDataMusic, token)
                    // }}
                    className="w-fit bg-white text-negro flex flex-col gap-8 justify-center p-6 rounded-md shadow-2xl"
                >
                    <fieldset className="flex flex-col gap-4">
                        <label
                            htmlFor="portrait"
                            className="outline-1 outline-dashed outline-negro p-2 rounded-md text-center cursor-pointer"
                        >
                            <span className="opacity-50">
                                <span className="text-xl">+</span> Agregar portada
                            </span>
                            <input
                                required
                                name="img"
                                type="file"
                                placeholder="+ Agregar portada"
                                hidden
                                id="portrait"
                            />
                        </label>
                        <label htmlFor="title" className="grid gap-2">
                            <p className="font-medium">Título de álbum</p>
                            <input
                                id="title"
                                required
                                name="title"
                                type="text"
                                placeholder="Título de álbum"
                                className="w-full outline outline-1 px-4 py-2 outline-blackMd rounded-md"
                            />
                        </label>
                        <fieldset className="flex flex-wrap gap-4">
                            <label htmlFor="genre" className="grid gap-2">
                                <p className="font-medium">Género musical</p>
                                <select
                                    name="genre"
                                    id="genre"
                                    placeholder="Seleccionar"
                                    className="w-full outline outline-1 px-3 py-2 outline-blackMd rounded-md text-blackMd"
                                >
                                    <option value="">Seleccionar</option>
                                    {genres.map((res) => (
                                        <option value={res.title} key={res.id}>
                                            {res.title}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label htmlFor="year" className="grid gap-2">
                                <p className="font-medium">Año de lanzamiento</p>
                                <select
                                    name="year"
                                    id="year"
                                    placeholder="Seleccionar"
                                    className="w-full outline outline-1 p-2 outline-blackMd rounded-md text-blackMd"
                                >
                                    <option value="">Seleccionar</option>
                                    {years.map((year) => (
                                        <option value={year} key={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </fieldset>
                    </fieldset>
                    <div className="flex w-full justify-between">
                        <input
                            type="submit"
                            className="px-4 py-2 bg-negro text-white rounded-full cursor-pointer hover:bg-opacity-90 duration-300"
                            value="Subir album"
                        />
                        <input
                            type="reset"
                            className="px-4 py-2 bg-negro text-white rounded-full cursor-pointer hover:bg-opacity-90 duration-300"
                            value="Cancelar"
                        />
                    </div>
                </form>
            </dialog>
        </>
    )
}


export default AddPostCard