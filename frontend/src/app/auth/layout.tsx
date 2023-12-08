import Image from 'next/image'

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gradient-to-b from-lightViolet to-darkViolet h-screen grid grid-cols-1 md:grid-cols-2'>
      {children}
      <div className='md:flex fixed h-screen left-2/4 w-full hidden'>
        <Image src='/auth_bg.jpg' fill alt='Background image' className='object-cover' />
      </div>
    </div>
  )
}

export default authLayout
