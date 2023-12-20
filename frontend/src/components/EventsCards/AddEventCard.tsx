import postEvents from '@/utils/eventsRequest/postEvents';
import { useRef, useState } from 'react';
import { FaPlus } from "react-icons/fa6";
const AddEventCard = () => {
    const [eventData, setEventData] = useState({
    })
    const [err, setErr] = useState('')
    const modalEventos = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalEventos.current?.showModal()
    };
    const closeModal = () => {
        modalEventos.current?.close()
    };
    return (
        <div className='flex h-36 w-[450px] items-center gap-5 bg-slate-200 rounded-md px-4 text-negro self-start'>
            <button className='bg-white rounded-md h-28 w-28 flex justify-center items-center'
                onClick={openModal}>
                <FaPlus className='h-12 w-12' />
            </button>
            <span>Agregar un evento</span>
            <dialog ref={modalEventos} className='rounded-md'>
                <form action=""
                    onReset={closeModal}
                    onSubmit={(e) => {
                        e.preventDefault();
                        const token = localStorage.getItem('tKeyId')
                        postEvents(eventData, closeModal, token, setErr).catch((e: Error) => {
                            console.error(e)
                        })
                    }}
                    className='flex flex-col gap-5 justify-center p-10'
                >
                    <label htmlFor="fileEventos" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar foto
                        <input type="file" className='hidden' id='fileEventos' />
                    </label>
                    <label htmlFor="">
                        <small></small>
                        <input required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                titulo: e.target.value
                            })
                        }}
                            type="text" placeholder='Titulo' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="" className='flex gap-5'>
                        <input required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                fechaEvento: e.target.value
                            })
                        }}
                            type="date" placeholder='Fecha' className='border-2 p-2 border-negro rounded-md w-full' />
                        <input required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                hora: e.target.value
                            })
                        }}
                            type="time" placeholder='Horario' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <input required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                precio: e.target.value
                            })
                        }}
                            type="number" placeholder='precio' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <input required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                lugar: e.target.value
                            })
                        }}
                            type="text" placeholder='Lugar' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <textarea required onChange={(e) => {
                            setEventData({
                                ...eventData,
                                descripcion: e.target.value
                            })
                        }}
                            name="" id="" placeholder='Detalles' className='resize-none h-28 border-2 p-2 border-negro rounded-md w-full'></textarea>
                    </label>
                    <label className='flex w-full justify-between'>
                        <input type='submit' className='px-4 py-2 bg-negro text-white rounded-full cursor-pointer' value='Crear evento' />
                        <input type='reset' className='px-4 py-2 bg-negro text-white rounded-full' value='Cancelar' />
                    </label>
                    <small className='text-red-500'>{err}</small>
                </form>
            </dialog>
        </div>
    )
}

export default AddEventCard