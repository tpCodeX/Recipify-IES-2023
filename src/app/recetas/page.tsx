"use client"

import { useEffect, useState } from "react"
import arrayRecetas from './recetas.json'
import RecipeCard from "@/components/recipeCard-component/RecipeCard"
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"

const RecetasContainer=()=>{
    const[recipes,setRecipes]=useState([]  as iRecipeInfo[])

    useEffect(()=>{
        console.log("use effect ejecutandose xd")
        setRecipes(arrayRecetas)
    })

    return(
    <main className="main-section">
        {recipes.map((recipe:iRecipeInfo) =>(
            <RecipeCard recipeInfo={recipe}/>
        ))}
    </main>
    )
}

export default RecetasContainer