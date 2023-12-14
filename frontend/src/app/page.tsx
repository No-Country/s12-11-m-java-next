import { Header } from "@/components/Header/Header"
import Link from "next/link"
import find from "../../public/find.webp"
import singer from "../../public/singer.webp"
import disco from "../../public/people-disco.webp"
import dancing from "../../public/dancing.webp"
import phrase from "../../public/connect-phrase.png"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"
import { SiExpertsexchange } from "react-icons/si"
import { IoIosSearch } from "react-icons/io"
export default function Home() {
  return (
    <div className="max-w-[1440px] m-auto bg-gradient-to-b from-darkViolet to-lightViolet">
      <header className="relative bg-home_bg bg-cover text-whiteColor min-h-[95vh]">
        <Header />
        <section className="w-full absolute bottom-0 grid gap-6 p-12 bg-gradient-to-t from-purpleShadow">
          <h2 className="grid gap-3 text-5xl font-semibold max-w-3xl">
            <span>El lugar indicado para</span>
            <span>compartir tu música y renovar</span>
            <span>tu playlist.</span>
          </h2>
          <Link
            href="/descubre"
            className="w-fit px-4 py-2 bg-rosa text-negro text-sm font-bold rounded-full uppercase"
          >
            COMIENZA AHORA
          </Link>
        </section>
      </header>
      <main className="grid gap-16 bg-gradient-to-b from-purpleShadow to-darkViolet text-whiteColor py-28">
        <section className="w-full max-w-6xl flex justify-between items-center gap-10 m-auto px-8">
          <div className="relative">
            <span className="w-48 absolute top-32 -right-10 px-3 py-2 flex items-center gap-4 text-sm font-light bg-purpleVanish rounded-md backdrop-blur-sm">
              <IoIosSearch className="text-xl" />
              Pop|
            </span>
            <picture>
              <source srcSet={find.src} type="image/webp" />
              <img
                src={find.src}
                alt="Find singers"
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
        <section className="relative w-full max-w-6xl flex justify-between items-center gap-10 m-auto px-8">
          <div className="max-w-xs grid gap-4">
            <span className="stroke-text text-4xl font-extrabold">02.</span>
            <h2 className="text-lg uppercase font-bold">Comparte</h2>
            <p>
              Si eres artista, sube toda tu música y comparte tus eventos para
              llegar a un mayor público.
            </p>
          </div>
          <div>
            <picture className="absolute top-8 right-20 z-20">
              <source srcSet={singer.src} type="image/webp" />
              <img
                src={singer.src}
                alt="Girl singer"
                width="320px"
                height="auto"
              />
            </picture>
            <picture>
              <source srcSet={disco.src} type="image/webp" />
              <img src={disco.src} alt="Disco" width="340px" height="auto" />
            </picture>
          </div>
        </section>
        <section className="w-full max-w-6xl flex justify-between items-center gap-10 m-auto px-8">
          <div className="relative">
            <picture>
              <source srcSet={dancing.src} type="image/webp" />
              <img
                src={dancing.src}
                alt="Connect with musicians"
                width="380px"
                height="auto"
              />
            </picture>
            <picture className="absolute -bottom-14 -right-14">
              <img
                src={phrase.src}
                alt="phrase: Vive la experiencia con tus artistas favoritos"
                width="110px"
                height="auto"
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
