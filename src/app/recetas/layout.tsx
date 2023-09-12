import Galeria from "@/components/galeria-component/Galeria"
import Menu from "@/components/menu-component/Menu"



const RecetasLayout =({children}:{children:React.ReactNode})=>{
    return <>
        <Menu/>
        {children}
        <Galeria/>
        </>
}

export default RecetasLayout