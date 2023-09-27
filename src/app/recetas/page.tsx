"use client"
import './page.css'
import { useEffect, useState } from "react"
import arrayRecetas from './recetas.json'
import RecipeCard from "@/components/recipeCard-component/RecipeCard"
import Pagination from "@/components/pagination-component/Pagination"
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"

const MainPage = () => {

    
    const [recipes, setRecipes] = useState([] as iRecipeInfo[])
    const [recipesPerPage, setRecipesPerPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    

    const lastIndex=currentPage * recipesPerPage

    const firstIndex=lastIndex - recipesPerPage


    useEffect(() => {
        setRecipesPerPage(6)
        console.log(window.innerWidth)
        console.log(window.innerHeight)

        setRecipes(arrayRecetas)
    },[arrayRecetas])

    return (
        <>
        <main className="w-screen">
        <Pagination currentPage={currentPage} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} totalRecipes={recipes.length}></Pagination>
            <div className="flex flex-col md:flex-row gap-3 md:flex-wrap md:justify-evenly md:gap-10 p-3 sm:p-0">
            {recipes.map((recipe: iRecipeInfo) => (
                <RecipeCard recipeInfo={recipe} key={recipe.id}/>
                )).slice(firstIndex, lastIndex)}

            </div>
        </main>
                </>
    )
}

export default MainPage