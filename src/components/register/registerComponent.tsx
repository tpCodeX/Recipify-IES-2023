"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RegisterComponent = () => {
  const [error, setError] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  const handleRedirect = (path:string) => {
    router.push(path);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/api/userback",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          repeatPassword
        }),
      }
    );
    // console.info("estado de resultado "+res.status)
    const responseAPI = await res.json();

    if (res.status != 201) {
      setError(responseAPI.message);
      handleRedirect("/api/register");
    }else{
      const result = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false
    });
     handleRedirect("/recetas");
  }
  
  };

  return (
    <div>
      <h1>Regístrate y comienza a buscar</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          className="form-control mb-2"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="form-control mb-2"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="123123"
          name="password"
          className="form-control mb-2"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="repetir contraseña"
          name="repeatPassword"
          className="form-control mb-2"
          value={repeatPassword}
          onChange={(event) => setRepeatPassword(event.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Registrarse
        </button>
      </form>

      {error && (
    <div className='mb-2'>
    <h1 >{error}</h1>
   </div>
  )}
    </div>
  );
};
export default RegisterComponent;
