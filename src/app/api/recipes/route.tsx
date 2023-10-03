import { NextResponse } from "next/server"

interface RequestBody{
    name:string,
    email: string
}

export async function POST(request:Request){
    const response= NextResponse.next()
    const body:RequestBody= await request.json()
    const name=body.name
    console.log("name: "+name)
    return NextResponse.json(
            {message:"bieeen"},
            { status: 200, statusText: "Set cookie successfully" }
          );
}