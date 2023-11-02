"use client"
// import { useForm } from "react-hook-form";
import LinkButton from "@/components/LinkButton/LinkButton";
import { useEffect, useState } from "react";
import { categoriasInterface } from "@/interfaces/categoriasInterface";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function RecipeForm() {
  // const { handleSubmit, register, formState: { errors } } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // }
  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    const fetchCategorias = async () => {
      const res = await fetch("http://localhost:3000/api/userback/categoria");
      const data = await res.json();
      console.log(data);
      setCategorias(data)
    }
    fetchCategorias();
  }, []);

  const [file, setFile] = useState<File | null>(null);
  const {data: session}= useSession() 
  let idUsuario = session?.user['id'] 
  const router=useRouter()
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData();
    event.preventDefault()
    const title = ((event.currentTarget.elements.namedItem("title") as HTMLInputElement).value)
    const description = ((event.currentTarget.elements.namedItem("description") as HTMLInputElement).value)
    const ingredients = ((event.currentTarget.elements.namedItem("ingredients") as HTMLInputElement).value)
    const pasos = ((event.currentTarget.elements.namedItem("pasos") as HTMLInputElement).value)
    const categoria = ((event.currentTarget.elements.namedItem("categoria") as HTMLInputElement).value)
    formData.append("title",title) 
    formData.append("description",description) 
    formData.append("ingredients",ingredients) 
    formData.append("pasos",pasos) 
    formData.append("categoria",categoria)
    formData.append("idUsuario",String(idUsuario)) 
    if (file !== null) {
      formData.append("file", file);
    }
  const res = await fetch("http://localhost:3000/api/recetas",{
        method: "POST",
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
        body: formData,
      }
    );
    if(res.ok){
      router.push("/recetas")
    }
  }; 


  return (
    <>
      <form onSubmit={(event) => onSubmit(event)}  className="flex flex-col rounded-md gap-10 bg-green-100 w-[370px] sm:w-[500px] p-5 m-auto mt-10">
        <h1 className="text-3xl m-auto">¡Creá tu receta!</h1>
        <div className='self-center'>
          <label htmlFor="title" className='text-teal-900 text-xl sm:text-2xl'>¿Cómo se llama tu receta?</label>
          <input type="text" id="title" name='title'
            className="block sm:w-[350px] self-center h-[45px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"
            placeholder="Pizza a la piedra con olivas"
          />
        </div>
        <div className="self-center">
          <label htmlFor="" className="text-teal-900 text-xl">Foto de la Receta:</label>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>
        <div className='self-center'>
          <label htmlFor="description" className='text-teal-900 text-xl sm:text-2xl'>Descripción</label>
          <textarea name="description" id="description" cols={30} rows={10} maxLength={300} placeholder="Pizza casera cocinada a la piedra.
          Con muzzarella, aceite de oliva, aceitunas verdes y negras."
            className="block resize-none self-center w-[250px] sm:w-[350px] h-[120px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"></textarea>
        </div>
        <div className="self-center w-[250px] sm:w-[350px] h-fit">
          <label htmlFor="ingredients" className='text-teal-900 text-xl sm:text-2xl'>Lista de Ingredientes</label>
          <textarea name="ingredients" id="ingredients" cols={30} rows={30} maxLength={300} placeholder=""
            className="block resize-none self-center w-[250px] sm:w-[350px] h-[180px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"></textarea>
          <div className="w-full h-fit bg-slate-300 rounded-2xl mt-4 p-5 ">
            <p className="italic"><span className="font-bold">Importante: </span> <br /> Los ingredientes deben estar separados por coma ",".</p>
            <p className="italic">Ej: 1kg harina, 1lt agua, 3 cucharadas de azucar</p>
          </div>
        </div>
        <div className="self-center w-[250px] sm:w-[350px] h-fit">
          <label htmlFor="pasos" className='text-teal-900 text-xl sm:text-2xl'>Pasos a Seguir</label>
          <textarea name="pasos" id="pasos" cols={30} rows={30} maxLength={300} placeholder=""
            className="block resize-none self-center w-[250px] sm:w-[350px] h-[180px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl">
          </textarea>
          <div className="w-full h-fit bg-slate-300 rounded-2xl mt-4 p-5 ">
            <p className="italic"><span className="font-bold">Importante: </span> <br /> Los pasos deben estar separados por coma ",".</p>
            <p className="italic">Ej: Paso 1: Mezclar Agua y Harina, </p>
            <p className="italic">Paso 2: Amasar 10min, </p>
            <p className="italic">Paso 3: Llevar al horno, </p>
            <p>...</p>
          </div>
        </div>
        <div className='self-center w-[250px] sm:w-[350px]'>
          <label htmlFor="categoria" className='text-teal-900 text-xl sm:text-2xl'>Categoría</label>
          <select id="categoria" name='categoria'
            className="block self-center w-full h-[45px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl">
            {categorias.map((categoria: categoriasInterface) => {
              return (<option key={
                categoria.id
              } value={
                categoria.id
              }>{
                  categoria.name
                }</option>)
            })}
          </select>
        </div>
        <div
          className='w-[200px] h-[50px] bg-emerald-500 rounded-md m-auto mt-10 flex flex-col justify-center text-2xl  text-stone-100'>
          <button type="submit">¡Publicar!</button>
        </div>
      </form>
      <div className="mb-10">
        <LinkButton path="/" text="Volver Atrás" />
      </div>
      <div></div>
    </>
  )
}

export default RecipeForm;

