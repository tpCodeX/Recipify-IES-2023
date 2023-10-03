"use client"
import React, { useState } from "react"


function ProductComponent({  onSubmit }) {

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Nombre"
        // onChange={(event) => setName(event.target.value)}
        name="name"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        // onChange={(event) => setEmail(event.target.value)}
        name="email"
      />
      <button type="submit">Enviar</button>
    </form>
  );

  }
  
  export default ProductComponent