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
    },
  });

  return NextResponse.json(newRecipe);
}

// const { id } = request.body;
// const createCartService = new UserServices(); // Utiliza el servicio de creación del carrito
// try {
//   await createCartService.create(id); // Utiliza el método create del servicio
//   response.render('./create/message', { message:
//     return
//     <>
//     <h1>Producto agregado al carrito exitosamente</h1>
//     </>
//   })
// } catch (err) {
//   response.render("./productos/message", {
//     message: `Error al agregar producto al carrito: ${err.message}`
//   });
// }
