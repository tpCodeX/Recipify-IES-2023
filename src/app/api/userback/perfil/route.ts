import { NextResponse } from "next/server"
import { userInfo } from "@/interfaces/userInterfaces";

import UserServices from "@/services/userServices"


export async function POST(request:Request){
    // console.log("llego a post")
    const body:userInfo= await request.json()
    // console.log("id body:"+body.id)
    const userServicio= new UserServices()
//     const nameExiste= await userServicio.validarPasswordYRepeatPassword(body.password,body.repeatPassword)
//     if(nameExiste){
//       return NextResponse.json({user: null,message: "El nombre ingresado ya está en la base de datos"},{status: 400})
//    }
    const user=userServicio.updateUser(body);
    return  NextResponse.json({user:user, message:"usuario modificado con exito"},{status: 201})
    
}
