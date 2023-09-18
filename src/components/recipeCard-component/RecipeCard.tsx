import './RecipeCard.css'
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"

const RecipeCard = ({ recipeInfo }: { recipeInfo: iRecipeInfo }) => {

    return (
        <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                <img
                    src={recipeInfo.photo}
                    className="h-full w-full object-cover"
                />
            </div>
            <div className="p-6">
                <div className="mb-0 flex items-center justify-evenly">
                    <p className="block font-sans text-center text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                        {recipeInfo.title}
                        <br />
                    <p className="block text-center font-sans text-base font-medium leading-relaxed text-emerald-300 antialiased">
                        {recipeInfo.categoria}
                    </p>
                    </p>
                </div>
                <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                    {recipeInfo.description}
                </p>
            </div>
            <div className="p-0 pt-0">
                <button
                    className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    lets cook!
                </button>
            </div>
        </div>
    )
}

export default RecipeCard