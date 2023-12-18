'use client'
import postPosts from "@/utils/postRequest/postPosts"
import Image from "next/image"
import { useRef, useState } from "react"

const AddPostCard = () => {
    const [img, setImg] = useState('')
    const [err, setErr] = useState('')
    const modalPost = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalPost.current !== null ? modalPost.current.showModal() : {};
    };
    const closeModal = () => {
        modalPost.current !== null ? modalPost.current.close() : {};
        setImg('')
        setErr('')
    };

    return (
        <>
            <div className="w-full h-auto aspect-square flex flex-col gap-2 justify-center">
                <button
                    className="flex flex-col w-full h-full bg-white rounded-lg overflow-hidden items-center justify-center"
                    onClick={openModal}
                >
                    <span className="text-4xl text-darkViolet">+</span>
                    <span className=" text-darkViolet">Agregar post</span>
                </button>
            </div>
            <dialog
                ref={modalPost}
                className="fixed rounded-md"
            >
                <form
                    action=""
                    encType="multipart/form-data"
                    onReset={closeModal}
                    onSubmit={(e) => {
                        e.preventDefault()
                        const token = localStorage.getItem("tKeyId")
                        const formDataMusic = Object.fromEntries(
                            new FormData(e.currentTarget),
                        )
                        console.log(formDataMusic)
                        postPosts(formDataMusic, closeModal, token, setErr)
                    }}
                    className="w-fit bg-white text-negro flex flex-col gap-8 justify-center p-6 rounded-md shadow-2xl"
                >
                    <fieldset className="flex flex-col gap-4">
                        <label
                            htmlFor="portrait"
                            className={` flex flex-col items-center outline-1 outline-dashed outline-negro p-2 rounded-md text-center cursor-pointer`}
                        ><span>+ Agregar imagen</span>

                            <img src={img} width={200} height={200} alt="" hidden={!img.length > 0} />
                            <input
                                hidden
                                required
                                name="imagen"
                                type="file"
                                placeholder="+ Agregar imagen"
                                id="portrait"
                                className={`outline-none text-center ${img.length > 0 ? ' border-b-2' : ''} w-full`}
                                onChange={(e) => { setImg(e.target.value) }}
                            />
                        </label>
                        <label htmlFor="title" className="grid gap-2">
                            <p className="font-medium">Descripción</p>
                            <textarea
                                id="mensaje"
                                required
                                name="title"
                                placeholder="Descripción"
                                className="w-[300px] h-[100px] outline outline-1 px-4 py-2 outline-blackMd rounded-md "
                            ></textarea>
                        </label>

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
                    <small className="text-red-500 self-center">{err}</small>
                </form>
            </dialog>
        </>
    )
}


export default AddPostCard