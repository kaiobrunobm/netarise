import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { HeroUIProvider } from "@heroui/react";

const poppins = Poppins(
  {
    subsets: ["latin"],
    variable: "--font-poppins",
    display: "swap",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  }
)

const keepCalm = localFont({
  src: "./public/fonts/keepcalm-medium.ttf",
  variable: "--font-keep-calm",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Netarise Tech - Soluções em tecnologia",
  description: "A NetArise é uma aplicação web moderna projetada para oferecer soluções digitais de alto desempenho, seguras e fáceis de usar. Criada para apoiar empresas com serviços de TI, gerenciamento de infraestrutura e desenvolvimento web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${keepCalm.variable} h-full  bg-linear-to-bl from-[#B5B0E7] to-[#DFDDF5]`}
      >
        <HeroUIProvider>

          <Header />
          <HomePage />
          <main>
            {children}
          </main>
        </HeroUIProvider>

      </body>
    </html>
  );
}
