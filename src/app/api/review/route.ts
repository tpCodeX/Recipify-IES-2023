import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { Review } from "@prisma/client";
interface Reviews {
  valoracion: number;
  idUsuario: string;
  idRecipe: string;
}

export async function POST(request: Request) {
  const value: Reviews = await request.json();

  let review;

  review = await prisma.review.findFirst({
    where: {
      recipeID: Number(value.idRecipe),
      authorID: Number(value.idUsuario),
    },
  });

  if (!review) {
    const newReview = await prisma.review.create({
      data: {
        rating: value.valoracion,
        authorID: Number(value.idUsuario),
        recipeID: Number(value.idRecipe),
      },
    });

    return NextResponse.json({ newReview });
  }

  const reviews = await prisma.review.update({
    where: { id: review.id },
    data: { rating: value.valoracion },
  });

  return NextResponse.json({ reviews });

}
