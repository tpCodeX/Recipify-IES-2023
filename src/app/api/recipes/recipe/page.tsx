

"use client"

// import ProductComponent from '@/components/createProduct/receta';
import ProductComponent from '@/components/createProduct/receta';
import { useSession } from 'next-auth/react';
import React, { useState,useEffect } from 'react'

function Recipe() {
  const [categorias, setCategorias] = useState([]); 
  useEffect(() => {
    const fetchCategorias = async () => {
      const res = await fetch("http://localhost:3000/api/recipes/categorias");
      const data = await res.json();
      setCategorias(data)
    };
    fetchCategorias();
  }, []);
  const {data: session}= useSession()
  const onSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const titulo=((event.currentTarget.elements.namedItem("titulo") as HTMLInputElement).value)
    const descripcion=((event.currentTarget.elements.namedItem("descripcion") as HTMLInputElement).value)
    const ingredientes=((event.currentTarget.elements.namedItem("ingredientes") as HTMLInputElement).value)
    const categoria=((event.currentTarget.elements.namedItem("categoria") as HTMLInputElement).value)
    const idUsuario = session?.user['id']
    // console.log("dentroo")
    const res = await fetch("http://localhost:3000/api/recipes",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          descripcion,
          ingredientes,
          categoria,
          idUsuario
        }),
      }
    );
  };

  return (
    <>
    <ProductComponent onSubmit={onSubmit} categorias={categorias}/>
    </>
   )
}

export default Recipe