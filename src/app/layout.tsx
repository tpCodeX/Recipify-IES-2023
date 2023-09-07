// import NavBar from "@/components/navbar-component/NavBar";

// import RecipeSection from "@/components/recipe-component/RecipeSection";
import './normalize.css'
import './layout.css'
// import LoginComponent from "@/components/login-component/loginComponent";
// import Galeria from "@/components/galeria-component/Galeria";
// import Menu from "@/components/menu-component/Menu";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        {/* <NavBar/>
        <main className="">
           <Menu/> 
        <LoginComponent/>
        
          <Galeria/> 
        </main> */}
        {children}
        </body>
    </html>
  );
}
