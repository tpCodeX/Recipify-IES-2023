"use client"
import {useForm} from 'react-hook-form';

const FormCrearReceta = ()=>{

    const {handleSubmit,register}=useForm();

    const onSubmit = handleSubmit(data=>{
        console.log(data);
    })

    return (
        <main className="flex flex-col justify-start items-center text-center m-auto p-5 mt-4 min-h-screen w-screen xl:w-[800px] bg-red-200">
            <h2 className="text-3xl">¡ Compartí una receta con la comunidad !</h2>
            <section>
                <form onSubmit={onSubmit} className="flex flex-col mt-[35px] text-left w-[350px]">
                    <label className='text-2xl' htmlFor="">¿Cómo se llama tu receta?</label>
                    <input type="text" className='text-xl' placeholder="Arroz con leche..." {...register("title")} />
            <div className="mt-3 h-[1px] w-full"/>
                    <label className='text-2xl mt-[25px]' htmlFor="">¿Cómo se hace?</label>
                    <textarea className='w-full text-2xl' placeholder='Describe tu receta y los pasos a seguir...'></textarea>
                </form>
            </section>

        </main>
    )
}

export default FormCrearReceta