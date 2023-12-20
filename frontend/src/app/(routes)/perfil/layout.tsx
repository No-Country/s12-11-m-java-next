import Account from "@/components/Account/Account"
import AccountNavBar from "@/components/Account/AccountNavBar"
import { RedirectNoLogin } from '@/components/RedirectNoLogin/RedirectNoLogin'
import React from "react"

const pagePerfil = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col">
      <RedirectNoLogin />
      <Account />
      <article className="flex flex-col w-full gap-5 px-5 bg-darkViolet text-white min-h-[46vh] h-auto py-5">
        <AccountNavBar />
        {children}
      </article>
    </section>
  )
}

export default pagePerfil
