import { signJwtAccessToken } from "@/libs/jwt"
import prisma from "@/libs/prisma"
import * as bcrypt from "bcrypt"
//creamos una interfaz para el cuerpo de la api de inicio de sesión
interface RequestBody{
    username:string,
    password: string
}

export async function POST(request:Request){
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
        const accessToken= signJwtAccessToken(userWithoutPass)
        const result={
            ...userWithoutPass,
            accessToken
        }
        return new Response(JSON.stringify(result))
    }else{
        return new Response(JSON.stringify(null))
    }
}