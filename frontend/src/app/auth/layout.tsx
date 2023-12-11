'use client'
import ImgAuth from "@/components/ImgAuth/ImgAuth"
import RedirectNoLogin from "@/components/RedirectNoLogin/redirectNoLogin"
const authLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex bg-gradient-to-b from-lightViolet to-darkViolet h-full w-full '>
      <RedirectNoLogin />
      {children}
      <ImgAuth />
    </div>
  )
}

export default authLayout
