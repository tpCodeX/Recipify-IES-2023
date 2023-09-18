"use client"
import React, { useRef, useState } from 'react'
import "./loginEstilo.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import {Alert}  from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
function LoginComponent() {
  const router= useRouter()
  const userName = useRef("");
  const pass = useRef("");
  const {handleSubmit,register}=useForm()
  const [error, setError]= useState(false)
  const [cargando, setCargando]= useState(false)
  const onSubmit= async ()=>{
     setCargando(true)
     const result= await signIn("credentials",{
      username: userName.current,
      password: pass.current,
      redirect: false,
      callbackUrl: "/recetas",
     })
     if(result?.ok){
      setCargando(false)
      if (result.url) {
        router.push(result.url);
     }else{
      setError(true)
     }
    }
   }
  
  return (
<>
{cargando && (
   <Box sx={{ width: '100%' }}>
   <LinearProgress />
 </Box>
  )}
    <div className=" wrapper fadeInDown " >
    {error && (
    <div className='mb-2'>
    <Alert severity="error">Correo o password ingresado es incorrecto</Alert>
   </div>
  )}
 
      <div id="formContent" >
        <p className="font lead fw-normal mb-0 me-3 mt-3 letra">Sign in with</p>
         
        <div className="or-divider">
          <div className="or-divider-line"></div>
          <p className="font or-divider-text">or</p>
          <div className="or-divider-line"></div>
        </div>
        <form action="/login"  onSubmit={handleSubmit(onSubmit)}> 
          <input type="text" id="username" className="fadeIn second "
          placeholder="username" onChange={(e) => (userName.current = e.target.value)}/>
          <input type="password" id="password" className="fadeIn third text-center" 
          placeholder="password" onChange={(e) => (pass.current = e.target.value)}/>
          <input type="submit" className="boton fadeIn fourth mt-4" value="Iniciar Sesión" />
        </form>
        <p className="small mb-0 pb-lg-2">
          <a className="font underlineHover" href="#!">
            He olvidado la contraseña
          </a>
        </p>
        {/* Remind Password */}
        <div id="formFooter">
          ¿No tienes una cuenta?{' '}
          <a className="font underlineHover red" href="/api/register">
            Registrarse
          </a>
        </div>
      </div>
    </div>
    </>

  );
}

export default LoginComponent