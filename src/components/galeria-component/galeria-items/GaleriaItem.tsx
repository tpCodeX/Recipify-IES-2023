"use client"

import type { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export interface itemProps{
    title:string,
    photo?:string,
    icon:unknown,
}

const GaleriaItem = (categoria:itemProps) => {
    return (
        
        <div className="flex flex-col flex-wrap justify-center mr-10 h-24 w-full  border-2 border-transparent hover:border-zinc-600 shadow-lg rounded-lg  hover:bg-teal-500 "  >
        <div className='m-auto'>
            <p className="text-size"><FontAwesomeIcon icon={categoria.icon as IconDefinition} /> {categoria.title}
            </p>
        </div>
        </div>
        

    )
}

export default GaleriaItem