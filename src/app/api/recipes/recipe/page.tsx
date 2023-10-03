

"use client"

// import ProductComponent from '@/components/createProduct/receta';
import ProductComponent from '@/components/createProduct/receta';
import React, { useState } from 'react'

function Recipe() {

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const onSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const name=((event.currentTarget.elements.namedItem("name") as HTMLInputElement).value)
    const email=((event.currentTarget.elements.namedItem("email") as HTMLInputElement).value)
    const res = await fetch("http://localhost:3000/api/recipes",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email
        }),
      }
    );
  };

  return (
    <>
    <ProductComponent onSubmit={onSubmit}/>
    </>
   )
}

export default Recipe