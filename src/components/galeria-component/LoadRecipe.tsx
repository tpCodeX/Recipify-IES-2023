import prisma from "@/libs/prisma";

export async function LoadRecipe() {
  return await prisma.recipe.findMany()
}