import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({message:"Formulario de Login"})
}

export function POST(){
    return NextResponse.json({message:"Endpoint del submit de login con method POST."})
}