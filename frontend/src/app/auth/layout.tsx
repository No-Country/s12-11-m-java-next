'use client'
import ImgAuth from "@/components/ImgAuth/ImgAuth"
const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex bg-gradient-to-b from-lightViolet to-darkViolet h-full w-full '>
      {children}
      <ImgAuth />
    </div>
  )
}

export default authLayout
