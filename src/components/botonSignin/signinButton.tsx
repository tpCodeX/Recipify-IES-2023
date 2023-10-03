"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Link from 'next/link';
//donde muestro el usuario si tiene más de 2 estilos me da error
function SigninButton() {
//para usar la sesión
  const {data: session}= useSession()
  // console.log(session?.user);
  //si lo coloco en otro componente no me toma bien la sesión para lo que quiero mostrar si 
  //esta el usuario logueado
  if(session && session.user){
    return (
      <>
      <Link style={{color: 'white'}}href={"/api/recipes/recipe"}>Crear Receta</Link>
      <Link style={{color: 'white'}}href={"/dashboard"}>Dashboard</Link>
    <div className='flex gap-4 ml-auto'>
    <p className='text-sky-600' style={{color: "white"}}>{session.user.name}</p>
    <button onClick={()=>signOut({callbackUrl: "/"})} className='btn btn-danger'>
        Cerrar Sesión
    </button>
    </div>
    </>
    )
  }

  return <button onClick={()=>signIn()} className='btn btn-primary'>
    Iniciar Sesión
  </button>
}

export default SigninButton