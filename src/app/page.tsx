"use client"
import './layout'
import './page.css'
import LinkButton from '@/components/LinkButton/LinkButton'
const MainSection = ()=>{
     
  return <main className="min-h-screen min-w-full">
          




          <LinkButton path='/recetas/crear' text='Crear Receta'/>
          
          <LinkButton path='/recetas' text='Ver Recetas'/>
      
    
          </main>
    
}
export default MainSection