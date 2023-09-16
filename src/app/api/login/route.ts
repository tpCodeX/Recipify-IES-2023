import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.redirect(new URL("http:localhost:3000/login"));
}

export function POST(){
    return NextResponse.json({message:"Endpoint del submit de login con method POST."})
}