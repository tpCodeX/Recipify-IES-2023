import Menu from '@/components/menu-component/Menu'
import './layout'
import Galeria from '@/components/galeria-component/Galeria'


// console.log(users)

const MainSection = ()=>{
     
  return<>      
    <Menu/>
    <section className="main-section">
    <div className="main-section-item">
    </div>
    <div className="main-section-item"></div>
  </section>
  <Galeria/>
    </> 
}
export default MainSection