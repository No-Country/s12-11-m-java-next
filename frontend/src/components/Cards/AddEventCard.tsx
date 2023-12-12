import postEvents from '@/utils/postEvents/postEvents';
import React, { useState, useRef } from 'react'
import { FaPlus } from "react-icons/fa6";
const AddEventCard = () => {
    const [eventData, setEventData] = useState({
        titulo: 'el evento de joa',
        lugar: 'cba',
        hora: '22:30',
        precio: 5000,
        fechaEvento: '2022-11-11',
        descripcion: 'nose que poner aca',
    })
    const modalEventos = useRef<HTMLDialogElement>(null);
    const openModal = () => {
        modalEventos.current != null ? modalEventos.current.showModal() : {};
    };

    const closeModal = () => {
        modalEventos.current != null ? modalEventos.current.close() : {};
    };
    return (

        <div className='flex h-36 w-96 items-center gap-5 bg-slate-200 rounded-md px-4 text-negro'>
            <button className='bg-white rounded-md h-28 w-28 flex justify-center items-center'
                onClick={openModal}>
                <FaPlus className='h-12 w-12' />
            </button>
            <span>Agregar un evento</span>
            <dialog ref={modalEventos} className='rounded-md'>
                <form action=""
                    onSubmit={(e) => {
                        e.preventDefault();
                        postEvents(eventData)
                    }}
                    className='flex flex-col gap-5 justify-center p-10'
                >
                    <label htmlFor="fileEventos" className='border-2 p-2 border-negro border-dotted rounded-md w-full h-[43px] text-center cursor-pointer'>
                        + Agregar foto
                        <input type="file" className='hidden' id='fileEventos' />
                    </label>
                    <label htmlFor="">
                        <small></small>
                        <input type="text" placeholder='Titulo' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="" className='flex gap-5'>
                        <input type="date" placeholder='Fecha' className='border-2 p-2 border-negro rounded-md w-full' />
                        <input type="time" placeholder='Horario' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <small></small>
                        <input type="text" placeholder='' className='border-2 p-2 border-negro rounded-md w-full' />
                    </label>
                    <label htmlFor="">
                        <small></small>
                        <textarea name="" id="" placeholder='Detalles' className='border-2 p-2 border-negro rounded-md w-full'></textarea>
                    </label>
                    <label className='flex w-full justify-between'>
                        <input type='submit' className='px-4 py-2 bg-negro text-white rounded-full cursor-pointer' value='Crear evento' />
                        <button onClick={closeModal} className='px-4 py-2 bg-negro text-white rounded-full'>Cancelar</button>
                    </label>
                </form>
            </dialog>
        </div>
    )
}

export default AddEventCard