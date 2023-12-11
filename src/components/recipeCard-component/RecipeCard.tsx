import Link from 'next/link'
import './RecipeCard.css'
import {categoriasInterface} from '@/interfaces/categoriasInterface'
import Image from 'next/image'
import { IuserInfo } from '@/interfaces/userInterfaces'
const RecipeCard = ({ id, title, photo, description, author, categoria }: { id: number, title: string, photo: string, description: string, author: IuserInfo, categoria:categoriasInterface}) => {

    return (
        <section className='flex flex-col w-[500px] h-[750px] bg-green-200 rounded-2xl border-none border-[3px] hover:border-green-900 shadow-lg shadow-black hover:shadow-green-900 overflow-hidden '>
            <div className='w-full h-[300px] self-center border-none'>
                <Image className='w-full h-full  object-cover border-none ' src={photo} alt='Foto - receta' width={500} height={500}></Image>
            </div>
            <div className='relative self-center text-center pt-[3px] pb-[8px] w-full h-[50px] bg-neutral-600 '>
                <p className='text-3xl text-neutral-200'>{title}</p>
            </div>

            <div className="felx flex-col w-full h-[250px] overflow-hidden ">

                <div className=' text-slate-600 flex flex-col p-4 h-[250px]'>
                    <p className=' text-slate-900 text-xl font-bold'>Descripción</p>
                    <p className='pl-6  text-left first-letter:text-slate-950 first-letter:font-bold first-letter:uppercase'>
                        {description}
                    </p>
                </div>

            </div>
            <div className='flex justify-evenly items-center h-[50px] w-full '>
                <p className='text-center'><span className='text-slate-900 font-bold'>Categoría:</span> <span className='font-mediums'>{categoria.name}</span> </p>
                <p className='text-center'><span className='text-slate-900 font-bold'>Subida el:</span> <span className='font-medium'>6/6/6 por</span> <Link href={`/`}><span className='text-slate-900 font-bold'>{author.name}</span></Link></p>
            </div>
            <div className=' h-[100px] w-full flex justify-evenly items-center p-3'>
                <Link className='no-underline hover:text-inherit text-inherit' href={`/recetas/${id}`}>
                    <div className='bg-neutral-600 h-[50px] w-[125px] flex flex-col justify-center items-center rounded-xl text-xl shadow-xl hover:translate-y-[-10px] transition-all hover:scale-110'>
                        <p className='text-neutral-200'>Ver Receta</p>
                    </div>
                </Link>
                <Link className='no-underline hover:text-inherit text-inherit' href={`/users/${id}`}>
                    <div className='bg-neutral-600 h-[50px] w-[125px] flex flex-col justify-center items-center rounded-xl text-xl shadow-xl hover:translate-y-[-10px] transition-all hover:scale-110'>
                        <p className='text-neutral-200 '>Ver Cocinero</p>
                    </div>
                </Link>
            </div>

        </section>
    )
}

export default RecipeCard