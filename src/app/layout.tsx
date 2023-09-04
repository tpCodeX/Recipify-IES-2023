import NavBar from "@/components/navbar-component/NavBar";
import Menu from "@/components/menu-component/Menu";
import RecipeSection from "@/components/recipe-component/RecipeSection";
import './normalize.css'
import './layout.css'
import Galeria from "@/components/galeria-component/Galeria";
export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <NavBar/>
        <main className="grid-layout">
          <Menu/>
        {children}
          <Galeria/>
        </main>
        </body>
    </html>
  );
}
