import React from "react";
import { useForm } from "react-hook-form";


function RecipeForm() {
    const { handleSubmit, register,formState:{errors}} = useForm();
  
    const onSubmit = (data: any) => {
      console.log(data); // Puedes enviar estos datos a tu servidor o realizar acciones adicionales aquí
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre de Receta</label>
          <input type="text" {...register("title", {required: true, maxLength: 30} )} />
          {errors.nombre?.type === 'required' && <p> El Titulo es requerido </p>}
          {errors.nombre?.type === 'maxLength' && <p> El maximo de caracteres del campo es de 30 </p>}
        </div>
        <div>
          <label>Categoría</label>
          <select{...register("category")}>
              <option>Entrada</option>
              <option>Plato principal</option>
              <option>Guarnición</option>
              <option>Postres</option>
              <option>Otros</option>
          </select>
      
        </div>
  
        
  
        <div>
          <label >Descripción</label>
          
          <input type="text" {...register("description" ),{required: true}} />
        </div>
  
        <div>
          <label >Ingredientes</label>
         
          <input type="text" {...register("ingredients" ),{required: true}} />
          
        </div>
        <div>
          <label>Imagen</label>
          <input type="file" {...register("photo" )} />
      
        </div>
  
  
        <div>
          <button type="submit">Guardar Receta</button>
        </div>
      </form>
    );
  }
  
  export default RecipeForm;
  
