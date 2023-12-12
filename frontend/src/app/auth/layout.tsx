import Image from 'next/image'

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full w-full'>
      {children}
    </div>
  )
}

export default authLayout
