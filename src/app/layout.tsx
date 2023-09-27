
import { Providers } from "./providers";
import type { Metadata } from "next";
import './normalize.css'
import './layout.css'
import './globals.css'
import NavBar from "@/components/navbar-component/NavBar";

export const metadata: Metadata = {
  title: 'Recipify 👨🏻‍🍳',
  description: 'Recipify is a simple recipe-finding application. Enjoy it! :)',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-300">
        <Providers>
          <NavBar></NavBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
