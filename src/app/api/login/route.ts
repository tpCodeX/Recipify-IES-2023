
import { signJwtAccessToken } from "@/libs/jwt"
import prisma from "@/libs/prisma"
import * as bcrypt from "bcrypt"
import { NextResponse } from "next/server"
// import cookie from "cookie";
//creamos una interfaz para el cuerpo de la api de inicio de sesión
interface RequestBody{
    username:string,
    password: string
}

export async function POST(request:Request){
    const response= NextResponse.next()
    const body:RequestBody= await request.json()
    const user= await prisma.user.findFirst({
        where:{
            email:body.username
        }
    })
// si el usuario no es nulo y la contraseña es igual a la proporcionada en el cuerpo del req
    if(user && ( await bcrypt.compare(body.password,user.password))){
//Apartammos password y colocamos el resto de la info del user en un objeto
        const {password, ...userWithoutPass}=user
//creamos el token
        const accessToken= signJwtAccessToken(userWithoutPass)
//el operador de propagación ... se usa para copiar todos los datos del objeto 
        const result={
            ...userWithoutPass,
            accessToken
        }

//esto el cliente lo recibiria sin embargo al enviarlo al cuerpo de la petición significa que el frontend va a tener que almacenarlo el mismo  
    // const response = NextResponse.json(
    //     {result},
    //     { status: 200, statusText: "Set cookie successfully" }
    //   );
    
    //   response.cookies.set({
    //     name: "jwt",
    //     value: accessToken,
    //     sameSite: "strict",
    //     maxAge: 60*60*24,
    //     httpOnly: true,
    //   });
    //   return response
    return new Response(JSON.stringify(result))
    
    }else{
        return new Response(JSON.stringify(null))
    }
}