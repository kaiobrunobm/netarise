import CompaniesCarousel from "./CompaniesCarousel";

export default function Clients() {
  return (
    <div className="h-screen flex flex-col justify-start pt-20 items-center bg-[#F4F5F7] z-0 gap-6" id="Clients">
      <h2 className="font-display text-2xl text-center">Nossos clientes</h2>
      <CompaniesCarousel />
  </div>
  )
} 