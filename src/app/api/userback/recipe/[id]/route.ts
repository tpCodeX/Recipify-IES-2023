import { NextRequest,NextResponse } from "next/server"

import prisma from '@/libs/prisma'
interface Params{
    params: {id:string}
}


export async function GET(request:NextRequest,{params}:Params){
    const id = params.id
    const recipe= await prisma.recipe.findFirst({
        where:{
            id:Number(id)
        },
        include:{
            author:{ select:{ name:true }}
        }
    })
    // console.log(recipe)
    return new Response(JSON.stringify(recipe)) 
}