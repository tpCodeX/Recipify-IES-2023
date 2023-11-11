"use client"
import './layout'
import { titleFont } from './layout'
import './page.css'
import LinkButton from '@/components/LinkButton/LinkButton'
{/* <LinkButton path='/recetas' text='Ver Recetas' />
<LinkButton path='/recetas/crear' text='Crear Receta' /> */}
const MainSection = ()=>{
     
  return (<main className="h-screen">
    <div className='fondo-homepage flex flex-col items-center justify-center w-[300px] min-h-[300px] sm:w-[1380px] m-auto mt-5 rounded-xl shadow-2xl'>
      <div className='bg-green-300 w-[200px] h-[125px] sm:w-[760px]  sm:h-fit rounded-xl sm:mt-10 sm:mb-10 sm:p-4 '>
        <h2 className={'sm:text-[60px] text-center text-white ' +titleFont.className}>Bienvenido Usuario!</h2>
        <h3 className={'sm:text-[40px] text-center text-white '+titleFont.className}>Comenzá hoy tu viaje gastronómico!</h3>
      <LinkButton path='/recetas/crear' text='Crear Receta' />
      </div> 
    </div>

      <div className="flex flex-col items-center justify-center w-[300px] min-h-[300px] sm:h-[400px] sm:w-[1380px] m-auto mt-10 rounded-xl shadow-2xl bg-green-200 p-5">
        
        <div className="w-[1000px] overflow-hidden rounded-xl">

      
        <p className={'text-slate-800 text-[90px] absolute block bg-transparente w-[1000px] mt-10 h-fit text-center shadow-xl '+titleFont.className}>Tacos al Pastor</p>
        <p className={'text-slate-800 text-[40px] absolute block bg-transparente2 w-[500px] h-fit text-center rounded-xl shadow-xl right-[700px] bottom-[100px] '+titleFont.className}>Ver Receta</p>
      
        <img src="https://c4.wallpaperflare.com/wallpaper/570/745/92/comida-mexico-plato-tacos-wallpaper-preview.jpg" alt=",," className='object-cover w-full h-full' />


        </div>
      </div>
      
    
  </main>)
    
}
export default MainSection