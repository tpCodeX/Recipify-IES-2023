"use client"
import React, { useRef, useState } from 'react'
import "./loginEstilo.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react'


function LoginComponent() {
  const userName = useRef("");
  const pass = useRef("");
  const {handleSubmit,register}=useForm()
  const [error, setError]= useState(false)
  const onSubmit= async ()=>{
     const result= await signIn("credentials",{
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/recetas"
     })
   }
  
  return (
//     <form action="/login" onSubmit={handleSubmit(onSubmit)}>
//   <div className="mb-3">
//     <label htmlFor="username" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="username" aria-describedby="emailHelp" onChange={(e) => (userName.current = e.target.value)}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="password" className="form-label">Password</label>
//     <input type="password" className="form-control" id="password" onChange={(e) => (pass.current = e.target.value)}/>
//   </div>
//   <div className="mb-3 form-check">
//     {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
//     {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>

    <div className=" wrapper fadeInDown ">
      {error && (
    <div className="alert alert-danger" role="alert">
    Email o password ingresado es incorrecto
    </div>
  )}
      <div id="formContent" >
        <p className="font lead fw-normal mb-0 me-3 mt-3 letra">Sign in with</p>
         
        <div className="or-divider">
          <div className="or-divider-line"></div>
          <p className="font or-divider-text">or</p>
          <div className="or-divider-line"></div>
        </div>
        {/* Login Form   onSubmit={onSubmit} */   }
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
          <a className="font underlineHover red" href="./add">
            Registrarse
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent