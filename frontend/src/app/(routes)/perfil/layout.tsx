import { RedirectNoLogin } from "@/components/RedirectNoLogin/RedirectNoLogin"
import AccountNavBar from "@/components/Account/AccountNavBar"
import React from "react"
import Account from "@/components/Account/Account"

const pagePerfil = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col pb-6 relative">
      <RedirectNoLogin />
      <Account />
      <article className="flex flex-col w-full gap-5 px-5 bg-darkViolet text-white min-h-[42vh] h-auto py-5">
        <AccountNavBar />
        {children}
      </article>
    </section>
  )
}

export default pagePerfil
