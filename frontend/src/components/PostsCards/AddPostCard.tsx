'use client'
import postPosts from "../../utils/postRequest/postPosts"
import { useRef, useState } from "react"

const AddPostCard = () => {
    const [img, setImg] = useState('')
    const [err, setErr] = useState('')
    const modalPost = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalPost.current?.showModal()
    };
    const closeModal = () => {
        modalPost.current?.close()
        setImg('')
        setErr('')
    };

    const subirPost = (e: any) => {
        e.preventDefault()
        const token = localStorage.getItem("tKeyId")
        const formDataPost = Object.fromEntries(
            new FormData(e.currentTarget),
        )
        const formData = new FormData
        formData.append('mensaje', formDataPost.mensaje);
        formData.append('imagen', formDataPost.imagen);

        postPosts(formData, token, closeModal, setErr)

    }

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
                    onSubmit={subirPost}
                    className="w-[350px] bg-white text-negro flex flex-col gap-8 justify-center p-6 rounded-md shadow-2xl"
                >
                    <fieldset className="flex flex-col gap-4">
                        <label
                            htmlFor="portrait"
                            className={` flex flex-col items-center outline-1 outline-dashed outline-negro p-2 rounded-md text-center cursor-pointer`}
                        >
                            {!img.length > 0 ? <span>+ Agregar imagen</span> : <></>}

                            <img src={img} alt="" hidden={!img.length > 0} className="object-cover  h-[200px] w-full rounded-md" />
                            <input
                                hidden
                                name="imagen"
                                type="file"
                                placeholder="+ Agregar imagen"
                                id="portrait"
                                className={`outline-none text-center ${img.length > 0 ? ' border-b-2' : ''} w-full`}
                                onChange={(e) => {
                                    setImg(URL.createObjectURL(e.target.files[0]));
                                }}
                            />
                        </label>
                        <label htmlFor="title" className="grid gap-2">
                            <p className="font-medium">Descripción</p>
                            <textarea
                                id="mensaje"
                                required
                                name="mensaje"
                                placeholder="Descripción"
                                className="w-[300px] h-[100px] outline outline-1 px-4 py-2 outline-blackMd rounded-md "
                            ></textarea>
                        </label>

                    </fieldset>
                    <div className="flex w-full justify-between">
                        <input
                            type="submit"
                            className="px-4 py-2 bg-negro text-white rounded-full cursor-pointer hover:bg-opacity-90 duration-300"
                            value="Subir post"
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