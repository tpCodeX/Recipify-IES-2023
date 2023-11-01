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
    const titulo = data.get("titulo") as string;
  const descripcion = data.get("descripcion") as string;
  const ingredientes = data.get("ingredientes") as string;
  const categoria = data.get("categoria") as string;
  const idUsuario = data.get("idUsuario") as string;
    const image=data.get("file")
    const imageBlob = image as Blob | null;
    let buffer:any
    let linkImage
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
                linkImage= result.secure_url
            }
        }).
        end(buffer);
        });
    }
    
    
    // const photo="imagen"
    const recipeServicio= new RecipeServices()
    
    if (linkImage) {
        recipeServicio.addRecipe(titulo, descripcion, ingredientes, categoria, idUsuario, linkImage);
      }
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