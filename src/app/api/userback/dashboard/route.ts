import { verifyJwt } from '@/libs/jwt';
import prisma from '@/libs/prisma'
import { NextResponse } from 'next/server'


export async function GET(request:Request){
//verificamos si el token está en el encabezado
    const accessToken= request.headers.get("authorization")
//si el token no esta o no es válido (no podemos verificarlo) devolvemos un 401
    if(!accessToken || !verifyJwt(accessToken)){
    return new Response(JSON.stringify({
        error: "No autorizado"
    }),
    {
     status: 401
    })
    }
    const users= await prisma.user.findMany()
    return NextResponse.json(users);
}