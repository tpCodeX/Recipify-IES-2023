import NavBar from "@/components/navbar-component/NavBar";

// import RecipeSection from "@/components/recipe-component/RecipeSection";
import './normalize.css'
import './layout.css'

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <NavBar/>
        <main className="">
        {children}
        </main>
        </body>
    </html>
  );
}
