
import CompaniesCarousel from "./CompaniesCarousel";
import ReviewCarousel from "./ReviewCarousel";

export default function Clients() {
  return (
    <div className="h-screen flex flex-col justify-start pt-20 items-center bg-[#F4F5F7] z-0 gap-2.5" id="Clients">
      <h2 className="font-display text-2xl text-center">Nossos clientes</h2>
      <CompaniesCarousel />
      <h3 className="font-body font-extralight text-base">O que os nossos clientes tem a dizer</h3>
      <ReviewCarousel />
  </div>
  )
} 