import { NextRequest,NextResponse } from "next/server"

import prisma from '@/libs/prisma'
interface Params{
    params: {id:string}
}


export async function GET(request:NextRequest,{params}:Params){
    const id = params.id
    const idUsuario = request.headers.get('idUsuario')
    const recipe= await prisma.recipe.findFirst({
        where:{
            id:Number(id)
        },
        include:{
            author:{ select:{ name:true }},
            categoria:{ select:{ name:true }},
        }
    })
    const hasRating = await prisma.review.findFirst({
        where: {
          authorID:Number(idUsuario)
        },
      });
   
    const response = {
        ...recipe,
        hasRating: hasRating ? hasRating : false,
      };
    return new Response(JSON.stringify(response)) 
}