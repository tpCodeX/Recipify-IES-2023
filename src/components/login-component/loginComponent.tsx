"use client"
import React, { useState } from 'react'
import "./loginEstilo.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { useForm } from 'react-hook-form';




function LoginComponent() {

  const {handleSubmit,register}=useForm()
  const [error, setError]= useState(false)
 
  
  return (
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
        <form action="/login"  > 
          <input type="text" id="username" className="fadeIn second "
          placeholder="username" {...register('username')}/>
          <input type="password" id="password" className="fadeIn third text-center" 
          placeholder="password" {...register('password')}/>
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