"use client"

import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 
function SigninButton() {
//para usar la sesión
  const {data: session}= useSession()

  if(session && session.user){
    return (
    <div className='flex gap-4 ml-auto'>
   {/* <p className='text-sky-600' style={{color: "white", fontWeight:"bold"}}>{session.user.name}</p> */}
    <p className='text-sky-600' style={{color: "white"}}>{session.user.name}</p>
    <button onClick={()=>signOut({callbackUrl: "/"})} className='btn btn-danger'>
        Cerrar Sesión
    </button>
    </div>
    )
  }

  return <button onClick={()=>signIn()} className='btn btn-primary'>
    Iniciar Sesión
  </button>
}

export default SigninButton