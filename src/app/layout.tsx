
import { Providers } from "./providers";
import './normalize.css'
import './layout.css'
import './globals.css'
import NavBar from "@/components/navbar-component/NavBar";
import Footer from "./Footer";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-300 min-h-screen">
        <Providers>
          <NavBar/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
