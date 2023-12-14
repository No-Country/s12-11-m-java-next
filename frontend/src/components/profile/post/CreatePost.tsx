import { IoIosAdd } from "react-icons/io";
 

const CreatePost = () => {
    return (
        <div className="p-2 max-w-md w-full bg-white rounded-md">
            <form className="flex flex-col gap-2">
                <label  className="flex gap-2 px-2 py-2 w-full border-gray-400 justify-center items-center rounded-md border-2 p-1 text-black" htmlFor="image"><IoIosAdd className="text-xl"/> Agregar imagen</label>
                <input id="image" name="image" type="image" className="hidden peer" />
                <label className="text-black font-semibold">Descripción</label>
                <textarea placeholder="Descripción" className="h-32 w-full rounded-md outline-none border-2 border-gray-400"></textarea>
                <div className="flex my-3 justify-between w-full">
                    <button className="rounded-2xl bg-black text-white px-4 py-2">
                        Crear post
                    </button>
                    <button className="rounded-2xl bg-black text-white px-4 py-2">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreatePost