// import NavBar from "@/components/navbar-component/NavBar";

import NavBar from "@/components/navbar-component/NavBar";

// import RecipeSection from "@/components/recipe-component/RecipeSection";


export default function RootLayout({children}:{children:React.ReactNode}) {
  
  return (
    <html lang="es">
      <body>
      {/* <NavBar/> */}
        {/* <main className="grid-layout"> */}
        {children}
        {/* </main> */}

        </body>
    </html>
  );
}