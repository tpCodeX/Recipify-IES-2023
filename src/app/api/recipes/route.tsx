import RecipeServices from "@/services/recipeServices"
import { NextRequest, NextResponse } from "next/server"

import prisma from '@/libs/prisma'
import {v2 as cloudinary} from 'cloudinary';

interface RequestBody{
    titulo:string,
    descripcion:string,
    ingredientes:string,
    categoria:string,
    idUsuario:string
}
cloudinary.config({ 
    cloud_name: 'dseagqpd0', 
    api_key: '989994138848722', 
    api_secret: 'MCLCr24PMzwAQd0XnFi7Uy-lRFM' 
  });
export async function POST(request:NextRequest){
    const data =  await request.formData();
    const image=data.get("file")
    const imageBlob = image as Blob | null;
    let buffer:any
    // console.log(data)
    if (imageBlob) {
        const bytes = await imageBlob.arrayBuffer();
        buffer=Buffer.from(bytes)
       const response = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({}, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
            if(result){
                console.log("link "+ result.secure_url)
            }
        }).
        end(buffer);
        });
    }
    
    // const d=response.secure_url
    // console.log(data.get("image"))
    // const response= NextResponse.next()
    // const body:RequestBody= await request.json()
    // const titulo=body.titulo
    // const descripcion=body.descripcion
    // const ingredientes=body.ingredientes
    // const categoria=body.categoria
    // const idUsuario=body.idUsuario
    // const photo="imagen"
    // const recipeServicio= new RecipeServices()

    // recipeServicio.addRecipe(titulo,descripcion,ingredientes,categoria,idUsuario,photo)

    // return NextResponse.json(
    //         {message:"Receta creada con éxito"},
    //         { status: 200 }
    //       );
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