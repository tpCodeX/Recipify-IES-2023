import prisma from "@/libs/prisma"

export async function GET(request:Request){
    const categories = await prisma.categoria.findMany();

    return new Response(JSON.stringify(categories), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        }
      });
}