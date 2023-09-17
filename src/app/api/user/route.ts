import prisma from "@/libs/prisma"
import UserServices from "@/services/userServices"
import * as bcrypt from "bcrypt"
import { NextResponse } from "next/server"
interface userInfo{
    name:string,
    email:string,
    password:string
    role:string
}

export async function POST (request:Request){

   const usuarioServicio= new UserServices()
   const body:userInfo= await request.json()
   const usuarioEmailExiste= await prisma.user.findFirst({
      where: {email : body.email}
   })
   if(usuarioEmailExiste){
      return NextResponse.json({user: null,message: "email mal ingresado",status: 409})
   }
   const user= await usuarioServicio.registrarUser(body);
//    const user = await prisma.user.create({
//        data:{
//         name: body.name,
//         email: body.email,
//         password: await bcrypt.hash(body.password,10)
//        }
//    });
   const {password, ...result}= user
   // return  NextResponse.json({user:result, message:"usuario creado con exito",status: 201})
   return new Response(JSON.stringify(result))
}