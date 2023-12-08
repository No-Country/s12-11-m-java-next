import Image from "next/image"

function FeedCard () {
  return (
    <div className="flex flex-col border p-6 border-black roun rounded-3xl w-[678px] h-[500px] bg-white text-black">
      <div className="flex items-center gap-4">
        <Image src='/auth_bg.jpg' width='48' height='48' alt="" className="w-12 h-12 rounded-full" />
        <h3>Nombre publicacion</h3>
      </div>
      <p className="mt-5 mb-5">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed tempore
        officiis odit explicabo in minus necessitatibus, sit quas corrupti.
        Dicta repellendus autem ratione ea et animi odit molestiae? Perferendis,
        culpa?
      </p>
      {/* deberia ser una imagen */}
      <div className="bg-gray-300 w-full h-full rounded-xl"> </div>
    </div>
  )
}

export default FeedCard
