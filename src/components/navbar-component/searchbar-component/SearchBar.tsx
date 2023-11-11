"use client"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from '@nextui-org/react'
import { SearchIcon } from '../SearchIcon'
import { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { iRecipeInfo } from '@/interfaces/recipeInterfaces'
import SearchItem from './SearchItem'




const SearchBar = ({className}:{className:string}) => {
    
    // const [search,setSearch]=useState("")
    const [recipes,setRecipes]=useState([] as Array<iRecipeInfo>) 
    const {register,handleSubmit}=useForm();



    

        useEffect(()=>{
            
            const getDataSearch= async () => {
                
                const response = await fetch('http://localhost:3000/userback/recetas',{
                    method: 'GET',
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                const searchResult=await response.json();
                
                setRecipes(searchResult)  
            }
            getDataSearch();
        },[recipes])
        


    

    
    return (
        <search>
            <form 
            className={className}>
                <Input
                    {...register("search",{required:true,minLength:3})}
                    id='search'
                    name='search'
                    classNames={{
                        base: "max-w-full h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-white dark:bg-default-500/20",
                    }}
                    placeholder="¿Qué tenés en la heladera?"
                    size="md"
                    onClear={()=>setRecipes([])}
                    // startContent={<button type='submit'><SearchIcon size={18} width={18} height={18} /></button>}
                    endContent={<button type='submit'><SearchIcon size={18} width={18} height={18}/></button>}
                    type="search"
                    />
            </form>
            {recipes.length !==0? <div className="bg-gray-400 absolute flex flex-col p-2 gap-2 rounded-xl h-fit mt-2 w-[220px] sm:w-[400px] md:w-[450px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] ">
                {recipes.map((recipe)=>{
                    console.log(recipe)
                    if (recipes.length !== 0){
                        return <SearchItem coso={recipe.title}/>
                    }
                    return <></>
                })}
            </div>:<></>}
            </search>
    )



}

export default SearchBar