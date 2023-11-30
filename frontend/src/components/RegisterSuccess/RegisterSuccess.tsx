import IconCheck from '@/components/IconCheck/IconCheck'
import React from 'react'

const RegisterSuccess = () => {
  return (
    <section className='w-screen flex flex-col items-center'>
      <span className='flex items-center w-full h-72 bg-slate-200 justify-center text-2xl font-bold'>Registro exitoso!</span>
      <IconCheck />
      <button className='px-10 py-4 bg-slate-200 rounded-full'>Comenzar</button>
    </section>
  )
}

export default RegisterSuccess