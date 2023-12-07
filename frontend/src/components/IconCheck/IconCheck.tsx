import React from 'react'
import { FiCheck } from "react-icons/fi";
const IconCheck = () => {
    return (
        <div className="flex items-center justify-center w-38 relative bottom-20">
            <span
                className="flex flex-col items-center justify-center w-64 h-64 border-2 border-gray-300 
                rounded-full bg-green-400 dark:bg-green-400
                 dark:border-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6 text-8xl text-white">
                    <FiCheck />
                </div>
            </span>
        </div>

    )
}

export default IconCheck