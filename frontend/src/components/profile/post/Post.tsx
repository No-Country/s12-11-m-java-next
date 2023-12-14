import { IoIosAdd } from "react-icons/io";

const Post = () => {
    return (
        <div className="bg-white text-lightViolet w-80 h-56 rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
            <IoIosAdd className="text-4xl" />
            <span>Agregar post</span>
            </div>
        </div>
    )
}

export default Post