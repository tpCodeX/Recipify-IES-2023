import NavBar from "@/components/navbar-component/NavBar";

// import RecipeSection from "@/components/recipe-component/RecipeSection";

import LoginComponent from "@/components/login-component/loginComponent";

export default function RootLayout({children}:{children:React.ReactNode}) {
  return (
    <html lang="es">
      <body>
        <NavBar/>
        <main className="">
        <LoginComponent/>
        </main>
        </body>
    </html>
  );
}
