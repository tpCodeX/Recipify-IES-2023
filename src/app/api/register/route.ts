import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({message:"Formulario de Registro"})
}

export function POST(){
    return NextResponse.json({message:"Endpoint del submit de registro con method POST."})
}