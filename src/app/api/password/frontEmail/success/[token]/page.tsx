"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const TokenComponent = ({ params }: { params: { token: string } }) => {
  // function TokenComponent() {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [tokenUsuario, setTokenUsuario] = useState("");
  const [error, setError] = useState();
  const router = useRouter();
  const [succes, setSucces] = useState("");

  useEffect(() => {
    setTokenUsuario(params.token);
  }, [params.token]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/userback/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        repeatPassword,
        tokenUsuario,
      }),
    });
    const data = await res.json();

    if (res.status != 201) {
      setError(data.message);
    } else{
        setSucces("Su contraseña a sido cambiada exitosamente");
      router.push("/api/login/signin");
    }

    // if (password !== repeatPassword) {
    //   alert("Las contraseñas no coinciden");
    // } else {
    //   // Aquí se enviarían los datos al servidor
    // }
  };
  return (
    <>
      {error && (
        <div className="mb-2">
          <h1>{error}</h1>
        </div>
      )}
      {succes && (
        <div className="mb-2">
          <h1>{succes}</h1>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Repetir contraseña"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default TokenComponent;