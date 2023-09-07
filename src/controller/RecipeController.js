import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

// CreateRecipe
export async function GET() {
  const recipes = await prisma.Recipe.findMany();
  return NextResponse.json(recipes);
}

export async function POST(request) {
  const { title, description } = await request.json();
  const newRecipe = await prisma.Recipe.create({
    data: {
      title,
      description,
      ingredients,
      authorID
    },
  });

  return NextResponse.json(newRecipe);
}
