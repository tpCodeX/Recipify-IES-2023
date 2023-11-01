

"use client"

// import ProductComponent from '@/components/createProduct/receta';
import ProductComponent from '@/components/createProduct/receta';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useState,useEffect} from 'react'

function Recipe() {
  const [categorias, setCategorias] = useState([]);
  const [file, setFile] = useState<File | null>(null);
  const router= useRouter() 
  useEffect(() => {
    const fetchCategorias = async () => {
      const res = await fetch("http://localhost:3000/api/categorias");
      const data = await res.json();
      setCategorias(data)
    };
    fetchCategorias();
  }, []);
  const {data: session}= useSession()
  const onSubmit= async (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const titulo=((event.currentTarget.elements.namedItem("titulo") as HTMLInputElement).value)
    const descripcion=((event.currentTarget.elements.namedItem("descripcion") as HTMLInputElement).value)
    const ingredientes=((event.currentTarget.elements.namedItem("ingredientes") as HTMLInputElement).value)
    // const categoria=((event.currentTarget.elements.namedItem("categoria") as HTMLInputElement).value)
    // const file=event.currentTarget.elements.namedItem("file")
    let idUsuario = session?.user['id']
    let numeroCategoria=1
    const formData = new FormData();
    formData.append("titulo",titulo)
    formData.append("descripcion",descripcion)
    formData.append("ingredientes",ingredientes)
    formData.append("categoria",String(numeroCategoria))
    formData.append("idUsuario",String(idUsuario))
    if (file !== null) {
      formData.append("file", file);
    }
     const res = await fetch("http://localhost:3000/api/recipes",{
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      }
    );
    // const res = await fetch("http://localhost:3000/api/recipes",{
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       titulo,
    //       descripcion,
    //       ingredientes,
    //       categoria,
    //       idUsuario
    //     }),
    //   }
    // );
    // if(res.ok){
    //   router.push("/recetas")
    // }
  };

  return (
    <>
    {/* <ProductComponent onSubmit={onSubmit} categorias={categorias}/> */}
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Titulo</span>
        <input type="text" className="form-control border border-dark" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" name="titulo" />
      </div>
      <br />
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">Descripcion</span>
        <input type="text" className="form-control border border-dark" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="descripcion" />
      </div>

      <div className="input-group">
        <span className="input-group-text">Ingredientes</span>
        <textarea className="form-control border border-dark" aria-label="With textarea" name="ingredientes"></textarea >
      </div>

      <br />
      <input
          type="file"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setFile(e.target.files[0]);
            }
          }}
        />
{/* <select className="form-select border border-dark" aria-label="Default select example" name="categoria">
        <option value="">Elegir categoria</option>
        {categorias.map((categoria) => (
          <option key={categoria.id} value={categoria.id}>{categoria.name}</option>
        ))}
      </select> */}
      <br />
<br />
<br />
      <br />
      <button className="btn btn-danger" type="submit">Enviar</button>
    </form>
    </>
   )
}

export default Recipe