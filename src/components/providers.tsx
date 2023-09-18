"use client"

import { SessionProvider } from "next-auth/react"
import React, { ReactNode } from "react"

interface Props{
    children: ReactNode
}
//para que mantengamos nuestro objeto usuario en la aplicación
const Providers= ({children}:Props)=>{
    return <SessionProvider>{children}</SessionProvider>
}

export default Providers