import NavBar from "@/components/navbar-component/NavBar";
import Menu from "@/components/menu-component/Menu";
import { Providers } from "./providers";
import type { Metadata } from "next";
// import RecipeSection from "@/components/recipe-component/RecipeSection";
// import './normalize.css'
import './layout.css'
import './globals.css'
import Galeria from "@/components/galeria-component/Galeria";

export const metadata: Metadata = {
  title: 'Recipify 👨🏻‍🍳',
  description: 'Recipify is a simple recipe-finding application. Enjoy it! :)',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="">
        <Providers>
          <NavBar />
          
           
            <div className="grid grid-cols-13 md:grid-cols-13 sm:grid-cols-13 gap-5 mt-5">
              <div className="col-start-1 col-end-2 sm:col-start-1 sm:col-end-2 md:col-start-1 md:col-end-2">
                <Menu ></Menu>
              </div>
              <div className="col-start-2 col-end-11 md:col-start-2 md:col-end-11 sm:col-start-2 sm:col-end-11">
                {children}
              </div>
              <div className="col-start-11 col-end-13 sm:col-start-11 sm:col-end-13 md:col-start-11 md:col-end-13">
                <Galeria></Galeria>
              </div>
            </div>
        </Providers>
      </body>
    </html>
  );
}
