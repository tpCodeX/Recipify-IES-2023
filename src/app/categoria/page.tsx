"use client";
import { error } from "console";
import { useRouter } from "next/navigation";
import { useState } from "react";

function CategoriaComponent() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const res = await fetch("http://localhost:3000/api/userback/categoria", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const responseAPI = await res.json();

    if(res?.ok){
        router.push("/recetas");
     }else{
      setError(responseAPI.message)
    }
  };

  return (
    <div>
      {error && (
        <div className="mb-2">
          <p style={{ color: "red" }}>
            {error}
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="name"
          className="form-control mb-2"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default CategoriaComponent;
