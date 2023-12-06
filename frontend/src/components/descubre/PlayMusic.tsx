import Image from "next/image";
import { FaCirclePlay } from "react-icons/fa6";

const PlayMusic = () => {
    return (
        <div className="flex bg-violet-700 items-center p-2 justify-between max-w-5xl h-36 w-full">
            <div className="flex gap-10 items-center">
        <div className="bg-black rounded-md flex items-center justify-center h-32 w-36">
            <FaCirclePlay className="text-white text-3xl"/>
        </div>
        <div className="flex flex-col gap-2">
            <span className="text-white">Title of music</span>
            <span className="text-white">Gendle</span>
            <span className="text-white">Artits</span>
        </div>
            </div>
            <div className="flex items-center gap-20">
        <Image src='/play-music.svg' alt="icon" width={200} height={70} />
        <span className="text-white">1:02</span>
            </div>
    </div>
    )
}

export default PlayMusic