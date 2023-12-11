"use client"
import { useEffect, useState } from "react"
import RecipeCard from "@/components/recipeCard-component/RecipeCard"
import Pagination from "@/components/pagination-component/Pagination"
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"
import { useSession } from 'next-auth/react'
import { categoriasInterface } from '@/interfaces/categoriasInterface'

const MainPage = () => {


    const [recipes, setRecipes] = useState([] as iRecipeInfo[])
    const [recipesPerPage, setRecipesPerPage] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)


    const lastIndex = currentPage * recipesPerPage
    const firstIndex = lastIndex - recipesPerPage


    const { data: session } = useSession()


    useEffect(() => {
        
        const fetchUsers = async () => {
            
            const response = await fetch("http://192.168.1.40:3000/api/recetas", {
                method: "GET",
                headers: {
                    authorization: `${session?.user.accessToken}`,
                    "Content-Type": "aplication/json"
                },
                mode: "cors"
            });

            const recipes = await response.json();

            setRecipes(recipes);
        }
        setRecipesPerPage(3)
        fetchUsers()
    }, [])

    return (
        <>
            <main className="w-screen">
                <Pagination currentPage={currentPage} recipesPerPage={recipesPerPage} setCurrentPage={setCurrentPage} totalRecipes={recipes.length}></Pagination>
                <div className="flex flex-col md:flex-row gap-3 md:flex-wrap md:justify-evenly md:gap-10 p-3 sm:p-0">
                    {recipes.map((recipe:iRecipeInfo) => (
                        <RecipeCard id={recipe.id} title={recipe.title} photo={recipe.photo} author={recipe.author} description={recipe.description} categoria={recipe.categoria as categoriasInterface} key={recipe.id} />
                    )).slice(firstIndex, lastIndex)}
                </div>
            </main>
        </>
    )
}

export default MainPage