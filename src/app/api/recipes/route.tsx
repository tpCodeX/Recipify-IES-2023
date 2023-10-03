import { NextResponse } from "next/server"

interface RequestBody{
    titulo:string,
    descripcion:string,
    ingredientes:string,
    categoria:string,
    idUsuario:string
}

export async function POST(request:Request){
    const response= NextResponse.next()
    const body:RequestBody= await request.json()
    const titulo=body.titulo
    const descripcion=body.descripcion
    const ingredientes=body.ingredientes
    const categoria=body.categoria
    const idUsuario=body.idUsuario
    console.log("titulo: "+titulo)
    console.log("descripcion: "+descripcion)
    console.log("ingredientes: "+ingredientes)
    console.log("categoria: "+categoria)
    console.log("idUsuario "+idUsuario)
    return NextResponse.json(
            {message:"bieeen"},
            { status: 200 }
          );
}