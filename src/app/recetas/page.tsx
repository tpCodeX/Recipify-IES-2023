"use client"

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
        setRecipesPerPage(3)
        setRecipes(arrayRecetas)
    },[arrayRecetas])

    return (
        <>
        <div className="container p-5">
        <Pagination currentPage={currentPage} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} totalRecipes={recipes.length}></Pagination>
        </div>
        <main className="  flex flex-col flex-wrap h-screen items-center">
            {recipes.map((recipe: iRecipeInfo) => (
                <RecipeCard recipeInfo={recipe} key={recipe.id}/>
                )).slice(firstIndex, lastIndex)}
        </main>
                </>
    )
}

export default MainPage