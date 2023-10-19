import { NextResponse } from "next/server";
import prisma from '@/libs/prisma'
import { Review } from "@prisma/client";
interface Reviews{
  valoracion: number,
  idUsuario:string
  idRecipe:string
}

export async function POST(request:Request){
  const value:Reviews = await request.json();
  const bandera = await prisma.review.findFirst({
    where: {
      recipeID:Number(value.idRecipe),
      authorID:Number(value.idUsuario)
    }
  });
  let su=0
  if(bandera==null){
  const newUser = await prisma.review.create({
    data: {
      rating:value.valoracion,
      authorID:Number(value.idUsuario),
      recipeID:Number(value.idRecipe)
    },
  });
  return NextResponse.json(
    {newUser}
  );
  }
  else{
  const reviewUpdate=await prisma.review.update({
      where: { id: bandera.id},
             data: {
                rating:value.valoracion
              },
    })
       const reviewMany= await prisma.review.findMany({
       where:{
         recipeID: Number(value.idRecipe)
       }})
       reviewMany.forEach((review) => {
        // console.log(review.rating)
        su += review.rating;
      });
      // console.log("total "+su)
      // console.log("largo "+reviewMany.length)
      let total=su/reviewMany.length
      // console.log("la suma con rating es "+ total)
      const recipeUpdate2= await prisma.recipe.update({
        where: {id:Number(value.idRecipe)},
        data:{
          rating: total
        }
      })
      // console.log(recipeUpdate2)
        return NextResponse.json(
            {user:recipeUpdate2}
          );
  }
 
  
}