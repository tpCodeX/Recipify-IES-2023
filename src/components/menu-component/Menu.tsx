"use client"
import { Link } from "@nextui-org/react";
import NextLink from "next/link";
import './Menu.css'
const Menu = () => {

  const menuItems=[
    {
      title:"Recetas",
      link:"https://github.com/"
    },
    {
      title:"Top Semanal",
      link:"https://github.com/"
    },
    {
      title:"Mi Perfil",
      link:"https://github.com/"
    },
    {
      title:"Opciones",
      link:"https://github.com/"
    },
  ]
 
  return (
    <aside className={`rounded-xl  box-border :w-full md:w-fit text-center p-3 ml-auto mr-auto mt-20`}>
      <div className='text-4xl mb-5'>Menú</div>
      <div className='flex flex-col gap-5 text-center'>
        {menuItems.map((item)=>{
          return(
            <Link href={item.link}
          color="foreground"
          isBlock isExternal 
          className="w-full justify-center text-2xl hover:bg-teal-500 rounded-xl" 
          as={NextLink}>{item.title}</Link>
          )
        })}
        
      </div>
    </aside>
  )
};

export default Menu;