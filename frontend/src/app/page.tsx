import { Header } from '@/components/Header/Header';
import Link from 'next/link';

export default function Home () {
  return (
    <div className='bg-gradient-to-b from-darkViolet to-lightViolet text-white h-full'>
      <div className="bg-home_bg text-white bg-cover">
        <Header />
        <section className="text-white">
          <div className="flex flex-col justify-end container mx-auto py-6 gap-6 h-[60vh]">
            <h1 className="text-7xl font-semibold max-w-5xl">El lugar indicado para renovar tu playlist</h1>
            <p className="text-lg ml-2">Descubre artistas independientes cerca de tí o de cualquier lugar del mundo</p>
            <div className='mt-6'>
              <Link
                href='/descubre'
                className='px-8 py-3 bg-rosa text-black font-bold rounded-full'>
                COMIENZA AHORA
              </Link>
            </div>
          </div>
        </section>
      </div>
      <section>
        <div className="flex-col md:flex-row flex items-center justify-evenly mx-auto h-[50vh]">
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-2'>Encuentra</h1>
            <div className='px-16'>
              <p className='text-xl'>
                Descubre exactamente el tipo de artista o canción que estás buscando escuchar, a través de nuestros filtros.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-2'>Conecta</h1>
            <div className='px-16'>
              <p className='text-xl'>
                Sigue a los artistas que te gusten. Habla con ellos, ve a sus eventos o contratalos para el tuyo.
              </p>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold mb-2'>Comparte</h1>
            <div className='px-16'>
              <p className='text-xl'>
                Si eres artista, sube toda tu música. Si eres oyente, disfrútala.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className=''>
        <div className="flex items-center justify-evenly container mx-auto h-[60vh]">
          <div className='text-center'>
            <h1 className='text-xl font-semibold mb-2'>SUBTITLE</h1>
            <p className='max-w-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos ipsum? Incidunt nulla nihil sit. Amet animi architecto ea minima dolor dicta eaque quod ut, repellat beatae pariatur aperiam id voluptatem, dolore molestiae aliquid. Minus mollitia neque quia eaque laudantium quo deserunt incidunt? Voluptatibus ducimus saepe, maiores assumenda tenetur temporibus eos aspernatur distinctio nobis ea. Facere voluptatum doloribus praesentium. Explicabo impedit maxime reiciendis perferendis, ipsum fugiat, aperiam rerum amet eaque exercitationem rem eligendi, blanditiis repudiandae.
            </p>
          </div>
        </div>
      </section>
      <section className=''>
        <div className="flex items-center justify-evenly container mx-auto h-[60vh]">
          <div className='text-center'>
            <h1 className='text-xl font-semibold mb-2'>SUBTITLE</h1>
            <p className='max-w-xl'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos ipsum? Incidunt nulla nihil sit. Amet animi architecto ea minima dolor dicta eaque quod ut, repellat beatae pariatur aperiam id voluptatem, dolore molestiae aliquid. Minus mollitia neque quia eaque laudantium quo deserunt incidunt? Voluptatibus ducimus saepe, maiores assumenda tenetur temporibus eos aspernatur distinctio nobis ea. Facere voluptatum doloribus praesentium. Explicabo impedit maxime reiciendis perferendis, ipsum fugiat, aperiam rerum amet eaque exercitationem rem eligendi, blanditiis repudiandae.
            </p>
          </div>
        </div>
      </section>
      <footer className='py-9 bg-[#DCC6E0] text-black'>
        <div className="container mx-auto flex justify-between items-center flex-col md:flex-row md:items-start">
          <div className="md:w-1/4 mb-4 md:mb-0 mt-2 sm:mt-0 sm:ml-0 md:text-start text-center">
            <h3 className="text-xl font-semibold">CONTACTO</h3>
            <div className='flex flex-col'>
              <Link className="mt-1" href="mailto:info@mediconnect.com">email@email.com</Link>
              <Link className="mt-1" href="/">Preguntas Frecuentes</Link>
            </div>
          </div>
          <div className="md:w-1/4 mb-4 md:mb-0 mt-2 sm:mt-0 sm:ml-0 md:text-start text-center">
            <h3 className="text-xl font-semibold">LEGAL</h3>
            <div className='flex flex-col'>
              <Link className='mt-1' href="/">Términos de uso</Link>
              <Link className='mt-1' href="/">Política de privacidad</Link>
            </div>
          </div>
          <div className="md:w-1/4 mb-4 md:mb-0 mt-2 sm:mt-0 sm:ml-0 md:text-start text-center">
            <h3 className="text-xl font-semibold">Síguenos</h3>
            <ul className='flex gap-4'>
              {/* <li className="hover:scale-125 duration-1000 bg-[#ABABAB] rounded-full p-2">a</li>
                        <li className="hover:scale-125 duration-1000 bg-[#ABABAB] rounded-full p-2">a</li>
                        <li className="hover:scale-125 duration-1000 bg-[#ABABAB] rounded-full p-2">a</li> */}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
