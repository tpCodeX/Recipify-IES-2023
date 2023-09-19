import './Galeria.css'
import GaleriaItem, { itemProps } from './galeria-items/GaleriaItem';
import { faCarrot, faDrumstickBite, faFishFins, faWineBottle } from '@fortawesome/free-solid-svg-icons';

const categorias = [
  {
    title: "Veggies",
    photo: "https://therecipecritic.com/wp-content/uploads/2022/09/veggiecharcuterieboard-750x1000.jpg",
    icon: faCarrot
  },
  {
    title: "Carnes",
    photo: "https://www.cocina33.com/assets/Uploads/_resampled/clases-de-carnes-SetSize600400.jpg",
    icon: faDrumstickBite
  },
  {
    title: "Marinos",
    photo: "https://www.cocina33.com/assets/Uploads/_resampled/clases-de-carnes-SetSize600400.jpg",
    icon: faFishFins
  },
  {
    title: "Maridajes",
    photo: "https://ingenieriademenu.com/wp-content/uploads/2020/06/maridaje-perfecto-de-vino.jpg",
    icon: faWineBottle
  },
]



const Galeria = () => {
  return (
    <aside className='container'>
      <h3 className='text-2xl text-center mt-5 mb-3'>Galeria de Categorías</h3>
          <div className="flex flex-col h-full text-center gap-10">
        {categorias.map((categoria: itemProps) => {
          return <GaleriaItem key={categoria.title} icon={categoria.icon} title={categoria.title}></GaleriaItem>

        })}
      </div>
    </aside>
  )
};
export default Galeria;