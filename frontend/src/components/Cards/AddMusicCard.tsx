'use client'
import postMusica from '@/utils/postMusica/postMusica';
import React, { useEffect, useRef, useState } from 'react'
import { FaPlus } from 'react-icons/fa6';

const AddMusicCard = () => {
    const date = new Date
    const [fecha, setFecha] = useState(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
    const modalMusica = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalMusica.current != null ? modalMusica.current.showModal() : {}
    };

    const closeModal = () => {
        modalMusica.current != null ? modalMusica.current.close() : {};
    };
    // useEffect(() => {
    //     !fileImg ? setFileImg(fileImg) : {},
    //         !fileMusic ? setFileMusic(fileMusic) : {}
    // }, [fileImg, fileMusic])

    return (

        <div className='flex items-center px-4 text-white self-start border-b-2 w-full cursor-pointer'>
            <button className='h-12 items-center flex gap-3'
                onClick={openModal}>
                <FaPlus className='h-6' />
                <span>Agregar Canción</span>
            </button>
            <dialog ref={modalMusica} className='rounded-md'>
                <form action="" encType="multipart/form-data"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formDataMusic = Object.fromEntries(
                            new FormData(e.target)
                        );
                        // formDataMusic.append('file', fileImg.audio, fileMusic.audio);
                        console.log(formDataMusic);
                        //postMusica(closeModal, formDataMusic)
                    }}
                    className='flex flex-col gap-5 justify-center p-10'
                >
                    <label htmlFor="fileMusic" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar musica
                        <input required name='audio' type="file" className='hidden' id='fileMusic' />
                    </label>
                    <label htmlFor="fileMusicImg" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar imagen
                        <input required name='img' type="file" className='hidden' id='fileMusicImg' />
                    </label>
                    <label htmlFor="">
                        <input required name='titulo' type="text" placeholder='Titulo' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="" className='flex gap-5'>
                        <input required name='genero' type="text" placeholder='Genero' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <input name='fecha' type="text" defaultValue={fecha} hidden />
                        {/* <input name='albumId' type="number" defaultValue={1} hidden /> */}
                    </label>
                    <label className='flex w-full justify-between'>
                        <input type='submit' className='px-4 py-2 bg-negro text-white rounded-full cursor-pointer'
                            value='Subir archivo' />
                        <span onClick={closeModal} className='px-4 py-2 bg-negro text-white rounded-full'>Cancelar</span>
                    </label>
                </form>
            </dialog>
        </div>
    )
}

export default AddMusicCard