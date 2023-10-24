import prisma from "@/libs/prisma"
import UserServices from "@/services/userServices"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

//definimos interfaz para el cuerpo del request
interface userInfo{
    name:string,
    email:string,
    password:string,
    repeatPassword: string,
    country:string,
    role:string
}
//funcion para registro usuario
export async function POST (request:Request){

   const usuarioServicio= new UserServices()
   const body:userInfo= await request.json()
   // const nameExiste= await usuarioServicio.existeNameEnBaseDedatos(body.name)
   // if(nameExiste){
   //    return NextResponse.json({user: null,message: "El nombre ingresado ya está en la base de datos"},{status: 400})
   // }
   const emailExiste= await usuarioServicio.existeNameEnBaseDedatos(body.email)
   if(emailExiste){
      return NextResponse.json({user: null,message: "El email ingresado ya está en la base de datos"},{status: 400})
   }
   const samePassword= await usuarioServicio.compararPassword(body.password,body.repeatPassword);
   if(!samePassword){
      return NextResponse.json({user: null,message: "Las contraseñas deben ser iguales"},{status: 400})
   }

   if(body.country===""){
      body.country = "ARG";
   }

   const user= await usuarioServicio.registrarUser(body);

   const {password, ...result}= user
   return  NextResponse.json({user:result, message:"usuario creado con exito"},{status: 201})
   // return new Response(JSON.stringify(result))
}