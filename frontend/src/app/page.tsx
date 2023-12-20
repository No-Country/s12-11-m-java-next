import { Header } from "@/components/Header/Header"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"
import { IoIosSearch } from "react-icons/io"
import { SiExpertsexchange } from "react-icons/si"
import phrase from "../../public/connect-phrase.png"
import dancing from "../../public/dancing.webp"
import find from "../../public/find.webp"
import disco from "../../public/people-disco.webp"
import portrait from "../../public/production-home.webp"
import singer from "../../public/singer.webp"

export default function Home() {
  return (
    <div className="">
      <header className="relative flex flex-col text-whiteColor">
        <Header />
        <picture>
          <img
            src={portrait.src}
            alt="Portada del home"
            width="100%"
            height="auto"
            className="max-h-[640px] min-h-[348px] object-cover brightness-75"
          />
        </picture>
        <section className="absolute bottom-0 w-full grid items-end p-8 py-4 md:px-12 lg:py-10 bg-gradient-to-t from-purpleShadow">
          <div className="grid gap-4 sm:gap-8">
            <h2 className="md:hidden text-xl min-[390px]:text-2xl sm:text-3xl font-semibold max-w-xs sm:max-w-sm">
              El lugar indicado para compartir tu música y renovar tu playlist.
            </h2>
            <h2 className="hidden md:grid gap-3 text-4xl lg:text-5xl font-semibold max-w-3xl">
              <span>El lugar indicado para</span>
              <span>compartir tu música y renovar</span>
              <span>tu playlist.</span>
            </h2>
            <Link
              href="/descubre"
              className="w-fit px-4 py-2 bg-rosa text-negro text-xs sm:text-sm font-bold rounded-full uppercase hover:bg-whiteColor duration-300"
            >
              COMIENZA AHORA
            </Link>
          </div>
        </section>
      </header>
      <main className="grid gap-16 bg-gradient-to-b from-purpleShadow to-darkViolet text-whiteColor py-20 md:py-28">
        <section className="w-full max-w-6xl flex flex-col md:flex-row md:justify-between items-center gap-10 m-auto px-8">
          <div className="relative">
            <span className="w-28 min-[360px]:w-36 sm:w-44 absolute top-16 min-[360px]:top-20 -left-6 px-3 py-[6px] min-[360px]:py-2 flex items-center gap-2 sm:gap-4 text-xs min-[360px]:text-sm font-light bg-purpleVanish rounded-md backdrop-blur-sm">
              <IoIosSearch className="text-lg sm:text-xl" />
              Pop|
            </span>
            <picture>
              <source srcSet={find.src} type="image/webp" />
              <img
                src={find.src}
                alt="Encuentra Artistas"
                width="380px"
                height="auto"
              />
            </picture>
          </div>
          <div className="max-w-xs grid gap-4">
            <span className="stroke-text text-4xl font-extrabold">01.</span>
            <h2 className="text-lg uppercase font-bold">Encuentra</h2>
            <p>
              Descubre artístas independientes de tus géneros musicales
              favoritos.
            </p>
          </div>
        </section>
        <section className="relative w-full max-w-6xl flex flex-col-reverse md:flex-row md:justify-between items-center gap-14 md:gap-10 m-auto px-8">
          <div className="max-w-xs grid gap-4">
            <span className="stroke-text text-4xl font-extrabold">02.</span>
            <h2 className="text-lg uppercase font-bold">Comparte</h2>
            <p>
              Si eres artista, sube toda tu música y comparte tus eventos para
              llegar a un mayor público.
            </p>
          </div>
          <div className="relative ">
            <picture className="absolute top-6 -left-6 z-10 px-3 sm:px-0">
              <source srcSet={singer.src} type="image/webp" />
              <img
                src={singer.src}
                alt="Cantante"
                width="320px"
                height="auto"
              />
            </picture>
            <picture className="relative">
              <source srcSet={disco.src} type="image/webp" />
              <img src={disco.src} alt="Disco" width="340px" height="auto" />
            </picture>
          </div>
        </section>
        <section className="w-full max-w-6xl flex flex-col md:flex-row md:justify-between items-center gap-10 m-auto px-8">
          <div className="relative">
            <picture>
              <source srcSet={dancing.src} type="image/webp" />
              <img
                src={dancing.src}
                alt="Conecta con artistas"
                width="380px"
                height="auto"
              />
            </picture>
            <picture className="absolute -bottom-11 -right-7 md:-bottom-14 md:-right-14">
              <img
                src={phrase.src}
                alt="phrase: Vive la experiencia con tus artistas favoritos"
                width="110px"
                height="auto"
                className="w-24 sm:w-[110px]"
              />
            </picture>
          </div>
          <div className="max-w-xs grid gap-4">
            <span className="stroke-text text-4xl font-extrabold">03.</span>
            <h2 className="text-lg uppercase font-bold">Conecta</h2>
            <p>
              Asiste a los eventos de tus artistas independientes preferidos.
            </p>
          </div>
        </section>
      </main>
      <footer className="p-9 bg-rosa text-negro flex justify-between items-center flex-col gap-8 sm:flex-row sm:items-start text-center sm:text-left text-sm">
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold uppercase">Contacto</h3>
          <div className="grid gap-2">
            <Link href="mailto:info@mediconnect.com">email@email.com</Link>
            <Link href="/">Preguntas Frecuentes</Link>
          </div>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold uppercase">Legal</h3>
          <div className="grid gap-2">
            <Link href="/">Términos de uso</Link>
            <Link href="/">Política de privacidad</Link>
          </div>
        </div>
        <div className="grid gap-3">
          <h3 className="text-lg font-semibold uppercase">Síguenos</h3>
          <ul className="flex gap-3 text-base">
            <li className="hover:scale-[1.2] duration-300 p-2">
              <FaInstagram />
            </li>
            <li className="hover:scale-[1.2] duration-300 p-2">
              <FaFacebook />
            </li>
            <li className="hover:scale-[1.2] duration-300 p-2">
              <FaYoutube />
            </li>
            <li className="hover:scale-[1.2] duration-300 p-2">
              <SiExpertsexchange />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
