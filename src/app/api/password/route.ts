import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import TokenService from "@/services/tokenService";

interface userInfo {
  email: string;
}

export async function POST(request: Request) {
  try {
    const body: userInfo = await request.json();
    const tokenServicio= new TokenService()
    const user = await prisma.user.findFirst({
      where: { email: body.email },
    });
     if(user){
      const token=tokenServicio.crearToken(user)
      tokenServicio.enviarEmail(user.email, user.name, (await token).token)
    }

    return NextResponse.json({user:body.email, message:"Mensaje enviado con exito"},{status: 201});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
