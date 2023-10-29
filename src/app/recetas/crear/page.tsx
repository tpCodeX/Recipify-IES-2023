// import { useForm } from "react-hook-form";

import LinkButton from "@/components/LinkButton/LinkButton";


function RecipeForm() {
  // const { handleSubmit, register, formState: { errors } } = useForm();

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // }



  return (
    <>
      <form className="flex flex-col rounded-md gap-10 bg-green-100 w-[370px] sm:w-[425px] p-5 m-auto mt-10">
        <div className='self-center'>
          <label htmlFor="title" className='text-teal-900 text-xl'>Título</label>
          <input type="text" id="title" name='title'
            className="block self-center h-[45px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"
            placeholder="Pizza Casera"
          />
        </div>
        <div className='self-center'>
          <label htmlFor="description" className='text-teal-900 text-xl'>Descripción</label>
          <textarea name="description" id="" cols={30} rows={10} maxLength={300} placeholder="Pizza casera
          con muzzarella, aceite de oliva y aceitunas."
          className="block resize-none self-center w-[250px] h-[120px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"></textarea>
        </div>
          {/* 
          Drag N Drop de Ingredientes
                  */}
        <div className='self-center w-[250px]'>
          <label htmlFor="title" className='text-teal-900 text-xl'>Categoría</label>
          <select  id="title" name='title'
            className="block self-center w-full h-[45px] rounded-lg text-gray-700 bg-emerald-200 p-2 outline-emerald-500 text-xl"> 
            <option value="cat1">Categoría 1</option>
            <option value="cat2">Categoría 2</option>
            <option value="cat3">Categoría 3</option>
          </select>
        </div>
        <div
        className='w-[200px] h-[50px] bg-emerald-500 rounded-md m-auto mt-10 flex flex-col justify-center text-2xl text-stone-100'>
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

