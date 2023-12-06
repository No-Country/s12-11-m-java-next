import Image from 'next/image'
import bgImage from "../../assets/img/background.jpg"

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='md:grid md:grid-cols-2 h-screen'>
      {children}
      <div className='md:flex fixed h-screen left-2/4 w-full hidden'>
        <Image src={bgImage} alt='Background image' className='object-cover' />
      </div>
    </div>
  )
}

export default authLayout
