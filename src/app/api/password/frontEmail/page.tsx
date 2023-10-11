"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function PageEmail() {
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });
    const data = await res.json();
    router.push("/api/password/frontEmail/success");
  };

  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Mi Componente Funcional de React</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group input-group-lg">
          <span id="inputGroup-sizing-lg">Ingresa su correo</span>
          <input
            type="text"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <button className="btn btn-danger" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default PageEmail;
