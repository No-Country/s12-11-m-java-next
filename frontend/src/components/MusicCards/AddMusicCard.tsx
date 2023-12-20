'use client'
import getAlbum from '@/utils/albumsRequest/getAlbum';
import { genres } from '@/utils/genres';
import postMusica from '@/utils/musicRequest/postMusica';
import { useEffect, useRef, useState } from 'react';
import { FaPlus } from 'react-icons/fa6';

interface Album {
    id: string;
    title: string;
}

// const initialAlbums: Album[] = [];

const AddMusicCard = () => {
    const date = new Date
    const fechaSubida = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    const modalMusica = useRef<HTMLDialogElement>(null);
    const [albums, setAlbums] = useState<Album[] | string>();
    const token = localStorage.getItem('tKeyId')

    useEffect(() => {
        getAlbum(token, setAlbums)
            .catch((e: Error) => {
                console.error(e)
            })

    }, [])

    const openModal = () => {
        modalMusica.current != null && modalMusica.current.showModal()
    };

    const closeModal = () => {
        modalMusica.current != null && modalMusica.current.close()
    };

    const subirMusica = (e: any) => {
        e.preventDefault();
        const token = localStorage.getItem('tKeyId')
        const formDataMusic = Object.fromEntries(
            new FormData(e.currentTarget)
        );
        const form = new FormData()
        form.append('img', formDataMusic.img)
        form.append('audio', formDataMusic.audio)
        form.append('titulo', formDataMusic.titulo)
        form.append('genero', formDataMusic.genero)
        form.append('albumId', formDataMusic.albumId)
        form.append('fechaSubida', formDataMusic.fechaSubida)
        // console.log('formDataMusic', formDataMusic instanceof FormData);
        // console.log('form', form instanceof FormData);
        postMusica(closeModal, form, token).catch((e: Error) => {
            console.error(e)
        })
    }
    return (
        <div className='flex items-center px-4 text-white self-start border-b-2 w-full cursor-pointer'>
            <button className='h-12 items-center flex gap-5 outline-none'
                onClick={openModal}>
                <FaPlus className='h-6' />
                <span>Agregar Canción</span>
            </button>
            <dialog ref={modalMusica} className='rounded-md'>
                <form action="" encType="multipart/form-data"
                    onReset={closeModal}
                    onSubmit={subirMusica}
                    className='flex flex-col gap-5 justify-center p-10'
                >
                    <label htmlFor="audio" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar musica
                        <input required name='audio' type="file" hidden id='audio' />
                    </label>
                    <label htmlFor="img" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar imagen
                        <input required name='img' type="file" hidden id='img' />
                    </label>
                    <label htmlFor="">
                        <input required name='titulo' id='titulo' type="text" placeholder='Titulo' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="" className='flex flex-col'>
                        <small>Elija un genero</small>
                        <select name="genero" id="genero" placeholder='Genero' defaultValue={''} className='outline-none border-2 p-2 border-negro rounded-md w-full'>
                            {genres.map(res =>
                                <option value={res.title} key={res.id}>{res.title}</option>
                            )}
                        </select>
                    </label>
                    <label htmlFor="" className='flex flex-col'>
                        <small>Selecciona un album</small>
                        <select name="albumId" id="albumId" placeholder='album' defaultValue={''} className='outline-none border-2 p-2 border-negro rounded-md w-full'>
                            {typeof albums !== "string" && albums?.map(res =>
                                <option value={res.id} key={res.id}>{res.title}</option>
                            )}

                        </select>
                    </label>
                    <label htmlFor="">
                        <input name='fechaSubida' type="text" defaultValue={fechaSubida} hidden />
                        {/* <input name='albumId' type="text" id='albumId' defaultValue={1} hidden /> */}
                    </label>
                    <label className='flex w-full justify-between'>
                        <input type='submit' className='px-4 py-2 bg-negro text-white rounded-full cursor-pointer'
                            value='Subir archivo' />
                        <input type='reset' className='px-4 py-2 bg-negro text-white rounded-full' value='Cancelar' />
                    </label>
                </form>
            </dialog>
        </div>
    )
}

export default AddMusicCard