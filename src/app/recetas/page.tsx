"use client"

import { useSession } from "next-auth/react"

const RecetasContainer=()=>{
    const {data: session}= useSession()
    // console.log(session?.user);
    return(
    <main className="main-section">
        <h1>recetas</h1>
    </main>
    )
}

export default RecetasContainer