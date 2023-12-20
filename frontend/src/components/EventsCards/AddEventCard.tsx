import postEvents from '@/utils/eventsRequest/postEvents';
import { useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
const AddEventCard = () => {

    const [img, setImg] = useState('')
    const [err, setErr] = useState('')
    const modalEventos = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalEventos.current?.showModal()
    };
    const closeModal = () => {
        modalEventos.current?.close()
        setImg('')
        setErr('')
    };
    const subirEvento = (e: any) => {
        e.preventDefault()
        const token = localStorage.getItem('tKeyId')
        const eventData = Object.fromEntries(new FormData(e.currentTarget))
        const formData = new FormData()
        formData.append('img', eventData.img)
        formData.append('titulo', eventData.titulo)
        formData.append('lugar', eventData.lugar)
        formData.append('hora', eventData.hora)
        formData.append('precio', eventData.precio)
        formData.append('fechaEvento', eventData.fecha)
        formData.append('descripcion', eventData.descripcion)
        postEvents(formData, token, closeModal, setErr).catch((e: Error) => {
            console.error(e)
        })
        console.log(eventData);

    }
    return (
        <div className='flex h-[195.2px] w-[450px] items-center gap-5 bg-slate-200 rounded-md px-4 text-negro self-start'>
            <button className='bg-white rounded-md h-28 w-28 flex justify-center items-center'
                onClick={openModal}>
                <FaPlus className='h-12 w-12' />
            </button>
            <span>Agregar un evento</span>
            <dialog ref={modalEventos} className='rounded-md'>
                <form action=""
                    onReset={closeModal}
                    className='flex flex-col gap-5 justify-center px-10 pt-10 pb-5'
                    onSubmit={subirEvento}
                >
                    <label
                        htmlFor="portrait"
                        className={` flex flex-col items-center outline-1 outline-dashed outline-negro p-2 rounded-md text-center cursor-pointer`}
                    >
                        {img.length > 0 ? <></> : <span>+ Agregar imagen</span>}

                        <img src={img} alt=""
                            hidden={img.length === 0}
                            className="object-cover  h-[100px] w-full rounded-md" />
                        <input
                            hidden
                            name="img"
                            type="file"
                            placeholder="+ Agregar imagen"
                            id="portrait"
                            className={`outline-none text-center ${img.length > 0 ? ' border-b-2' : ''} w-full`}
                            onChange={(e) => {
                                e.target.files !== null ? setImg(URL.createObjectURL(e.target.files[0])) : setImg('')
                            }}
                        />
                    </label>
                    <label htmlFor="">
                        <input required
                            name='titulo'
                            type="text"
                            placeholder='Titulo'
                            className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="" className='flex gap-5'>
                        <input required
                            type="date"
                            name='fechaEvento'
                            placeholder='Fecha'
                            className='border-2 p-2 border-negro rounded-md w-full' />
                        <input required
                            name='hora'
                            type="time"
                            placeholder='Horario'
                            className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <input required
                            name='precio'
                            type="number"
                            placeholder='precio'
                            className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <input required
                            name='lugar'
                            type="text"
                            placeholder='Lugar'
                            className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <textarea required
                            name="descripcion"
                            id=""
                            placeholder='Detalles'
                            className='resize-none h-28 border-2 p-2 border-negro rounded-md w-full'></textarea>
                    </label>
                    <label className='flex w-full justify-between'>
                        <input type='submit' className='px-4 py-2 bg-negro text-white rounded-full cursor-pointer' value='Crear evento' />
                        <input type='reset' className='px-4 py-2 bg-negro text-white rounded-full' value='Cancelar' />
                    </label>
                    <small className='text-red-500 self-center'>{err}</small>
                </form>
            </dialog>
        </div>
    )
}

export default AddEventCard