"use client"

import { Recipe } from "@prisma/client";
import { useSession } from "next-auth/react"
import Link from "next/link";
import { useEffect, useState } from "react";

const RecetasContainer=()=>{
    const [recetas, setRecetas] = useState<Recipe[]>([]);
    const {data: session}= useSession()
    
    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('http://localhost:3000/api/recipes',{
                method: "GET",
                headers: {
                  authorization: `${session?.user.accessToken}`,
                  "Content-Type":"aplication/json"
                }
              });
              const recipes= await response.json()
              console.log(recipes)
              setRecetas(recipes);
        }
            fetchUsers();
        }, []);
    return(
    <main className="main-section">
        {/* <h1>recetas</h1> */}

        {recetas.map((receta) => (
            <div key={receta.id} className="recipe-card">
                {/* <img src={receta.imagen} alt={receta.nombre} /> */}
                <div >
                    <h3>{receta.title}</h3>
                    <p>{receta.description}</p>
                    <img src={receta.photo} alt="" width={100} height={100}/>
                    <p>Rating: {receta.rating}</p>
                    <Link style={{color: 'red'}}href={`/api/recipes/recipe/${receta.id}`}>Ver receta</Link>
                </div>
            </div>
        ))}
    </main>
    )
}

export default RecetasContainer