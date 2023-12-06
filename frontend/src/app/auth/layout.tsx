import Image from 'next/image'
import bgImage from "../../assets/img/background.jpg"

const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='grid grid-cols-2 h-screen'>
      {children}
      <div className='flex relative'>
        <Image src={bgImage} alt='Background image' />
      </div>
    </div>
  )
}

export default authLayout
