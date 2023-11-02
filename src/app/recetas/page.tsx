"use client"
import './page.css'
import { useEffect, useState } from "react"
import RecipeCard from "@/components/recipeCard-component/RecipeCard"
import Pagination from "@/components/pagination-component/Pagination"
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"

const MainPage = () => {


    const [recipes, setRecipes] = useState([] as iRecipeInfo[])
    const [recipesPerPage, setRecipesPerPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)


    const lastIndex = currentPage * recipesPerPage

    const firstIndex = lastIndex - recipesPerPage


    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3000/api/recetas', {
                method: "GET",
                headers: {
                    "Content-Type": "aplication/json"
                }
            });
            const recipes = await response.json()
            setRecipes(recipes);
        }
        setRecipesPerPage(6)
        fetchUsers()
    }, [])
    
    console.log(recipes)
    return (
        <>
            <main className="w-screen">
                <Pagination currentPage={currentPage} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} totalRecipes={recipes.length}></Pagination>
                <div className="flex flex-col md:flex-row gap-3 md:flex-wrap md:justify-evenly md:gap-10 p-3 sm:p-0">
                    {recipes.map((recipe: iRecipeInfo) => (
                        <RecipeCard id={recipe.id} title={recipe.title} photo={recipe.photo} author={String(recipe.author)} categoria={recipe.categoria} description={recipe.description} ingredients={recipe.ingredients} pasos={recipe.pasos} key={recipe.id} />
                    )).slice(firstIndex, lastIndex)}
                </div>
            </main>
        </>
    )
}

export default MainPage