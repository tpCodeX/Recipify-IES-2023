import Link from 'next/link'
import './RecipeCard.css'
import Image from 'next/image'

const RecipeCard = ({ id, title, photo, pasos, description, ingredients, author, categoria }: { id: number, title: string, photo: string, pasos: string, description: string, ingredients: string, author: string, categoria: string }) => {

    return (
        <section className='card-container bg-violet-300 w-full min-h-[200px] sm:w-[500px] sm:min-h-[650px] flex sm:flex-col rounded-lg overflow-hidden shadow-xl'>
            <div className='image-container max-w-[40%]  sm:max-w-full sm:max-h-[300px] '>
                <Image className='h-full w-full object-fill' src={photo} alt='Foto - receta' width={500} height={500}></Image>
            </div>
            <div className="content-containers max-w-[60%] sm:max-w-[100%] flex flex-col text-left items-center p-3">
                <span>{categoria}</span>
                <h2 className='text-xl'>{title}</h2>
                <span>Subida el 6/6/6 por {author}</span>
                <p>{description}</p>
                <p>{pasos}</p>
                <p>{ingredients}</p>
            </div>
            <Link className="text-red-500" href={`/recetas/${id}`}>Ver receta</Link>
        </section>
    )
}

export default RecipeCard