import RecipeServices from "@/services/recipeServices"
import { NextResponse } from "next/server"
import prisma from '@/libs/prisma'
interface RequestBody{
    titulo:string,
    descripcion:string,
    ingredientes:string,
    categoria:string,
    idUsuario:string
}

export async function POST(request:Request){
    const response= NextResponse.next()
    const body:RequestBody= await request.json()
    const titulo=body.titulo
    const descripcion=body.descripcion
    const ingredientes=body.ingredientes
    const categoria=body.categoria
    const idUsuario=body.idUsuario
    const photo="imagen"
    const recipeServicio= new RecipeServices()

    recipeServicio.addRecipe(titulo,descripcion,ingredientes,categoria,idUsuario,photo)

    return NextResponse.json(
            {message:"Receta creada con éxito"},
            { status: 200 }
          );
}

export async function GET(request:Request){
    const recipes= await prisma.recipe.findMany({
        include:{
            author:true
        }
    })
    // console.log(recipes)
    return NextResponse.json(recipes);
}