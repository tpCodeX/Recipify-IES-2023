import NavBar from "@/components/navbar-component/NavBar";

// import RecipeSection from "@/components/recipe-component/RecipeSection";
import './normalize.css'
import './layout.css'
import Providers from "@/components/providers";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <Providers>
        <NavBar/>
        {/* <main className="grid-layout"> */}
        {children}
        {/* </main> */}
        </Providers>
        </body>
    </html>
  );
}
