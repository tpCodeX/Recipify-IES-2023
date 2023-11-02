import RecipeServices from "@/services/recipeServices";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import prisma from "@/libs/prisma";

cloudinary.config({
  cloud_name: "dseagqpd0",
  api_key: "989994138848722",
  api_secret: "MCLCr24PMzwAQd0XnFi7Uy-lRFM",
});
export async function POST(request: NextRequest) {
  console.log("POST ANDANDING")
  const data = await request.formData();
  const titulo = data.get("title") as string;
  const descripcion = data.get("description") as string;
  const ingredientes = data.get("ingredients") as string;
  const pasos = data.get("pasos") as string;
  const categoria = data.get("categoria") as string;
  const idUsuario = data.get("idUsuario") as string;
  const image = data.get("file");
  const imageBlob = image as Blob | null;
  let buffer: any;
  let linkImage;
  if (imageBlob) {
    const bytes = await imageBlob.arrayBuffer();
    buffer = Buffer.from(bytes);
    const response = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({}, (err, result) => {
          if (err) {
            reject(err);
          }
          resolve(result);
          if (result) {
            linkImage = result.secure_url;
          }
        })
        .end(buffer);
    });
  }

  const recipeServicio = new RecipeServices();

  if (linkImage) {
    recipeServicio.addRecipe(
      titulo,
      linkImage,
      descripcion,
      pasos,
      ingredientes,
      categoria,
      idUsuario
    );
  }
  return NextResponse.json(
    { message: "Receta creada con éxito" },
    { status: 200 }
  );
} 


export async function GET(request: Request) {
  const recipes = await prisma.recipe.findMany({
    include: {
      author: true,
    },
  });
  return NextResponse.json(recipes);
} 