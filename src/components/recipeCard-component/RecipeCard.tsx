import './RecipeCard.css'
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"
import Image from 'next/image'

const RecipeCard = ({ recipeInfo }: { recipeInfo: iRecipeInfo }) => {

    return (
        <section className='card-container bg-violet-300 w-full min-h-[200px] sm:w-[500px] sm:min-h-[650px] flex sm:flex-col rounded-lg overflow-hidden shadow-xl'>
            <div className='image-container max-w-[40%]  sm:max-w-full sm:max-h-[300px] '>
            <Image className='h-full w-full object-fill' src={recipeInfo.photo}  alt='Foto - receta' width={500} height={500}></Image>
            </div>
            <div className="content-containers max-w-[60%] sm:max-w-[100%] flex flex-col text-left items-center p-3">
            <span>{recipeInfo.categoria}</span>
            <h2 className='text-xl'>{recipeInfo.title}</h2>
            <span>Subida el {recipeInfo.createdAt} por {recipeInfo.author}</span>
            <p>{recipeInfo.description}</p>
            </div>
        </section>
    )
}

export default RecipeCard