"use client"

import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';
function SignInButton({inString,outString}:{inString:string,outString:string}) {
  const {data: session}= useSession()
  if(session && session.user){
    return (
    <p onClick={()=>signOut({callbackUrl: "/"})} className='text-red-500'>
    {session.user.name} {outString}
    </p>
    )
  }
  return <p onClick={()=>signIn()} className='font-semibold'>
    {inString}
  </p>
}

export default SignInButton