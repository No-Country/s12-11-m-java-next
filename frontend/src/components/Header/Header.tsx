"use client"
import { LinkHeader } from "@/utils/Links"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { IoPerson } from "react-icons/io5"

export const Header = () => {
  const [log, setLog] = useState("false")
  const pathname = usePathname()

  useEffect(() => {
    localStorage.getItem("tKeyId") !== null
      ? setLog(`${localStorage.getItem("tKeyId")}`)
      : setLog(log)
  }, [])

  return (
    <header
      className={`absolute w-full top-0 z-10 py-4 px-8 flex items-center justify-between text-whiteColor bg-gradient-to-b from-navShadow font-semibold ${
        pathname !== "/" && "bg-none relative"
      }`}
    >
      <div className="flex items-center gap-24">
        <h3 className="flex flex-col uppercase text-xs">
          <span>Stereos</span>
          <span>en la nube</span>
        </h3>
        <div className="flex gap-11 font-light">
          {LinkHeader.map((res) => (
            <Link
              className={
                pathname === `${res.path}`
                  ? "font-medium border-b-2 border-whiteColor"
                  : ""
              }
              key={res.label}
              href={res.path}
            >
              {res.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center uppercase text-sm">
        {log === "false" ? (
          <>
            <Link
              className="px-5 py-2 outline outline-1 outline-rosa rounded-full hover:bg-rosa hover:text-negro duration-300"
              href="/auth/register"
            >
              Registrarse
            </Link>
            <Link
              className="px-5 py-2 bg-rosa text-negro rounded-full hover:bg-whiteColor duration-300"
              href="/auth/login"
            >
              Iniciar sesión
            </Link>
          </>
        ) : (
          <Link
            href={"/perfil/musica"}
            className="w-8 h-8 rounded-full bg-whiteColor flex justify-center items-center"
          >
            <IoPerson className="text-purpleShadow text-lg" />
          </Link>
        )}
      </div>
    </header>
  )
}
