import Image from 'next/image'

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen w-screen'>
      {children}
    </div>
  )
}

export default authLayout
