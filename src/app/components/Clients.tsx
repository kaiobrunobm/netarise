
import ReviewCard from "./cards/ReviewCard";
import CompaniesCarousel from "./CompaniesCarousel";
import ReviewCarousel from "./ReviewCarousel";

export default function Clients() {
  return (
    <div className="h-screen flex flex-col justify-start pt-20 items-center bg-[#F4F5F7] z-0 gap-2.5 md:gap-12" id="Clients">
      <h2 className="font-display text-2xl text-center">Nossos clientes</h2>
      <CompaniesCarousel />
      
      <h3 className="font-body font-extralight text-base md:text-3xl">O que os nossos clientes tem a dizer</h3>
      <ReviewCarousel>
        <ReviewCard index={0} review="Trabalhar com a equipe da NetArise tem sido nada menos que excepcional. Como CTO da Microsoft, colaborei com inúmeros parceiros ao longo dos anos — poucos demonstraram a clareza, precisão e senso de design moderno que a NetArise apresentou." 
            author="Daniel Whitmore" 
            company="CTO  Microsoft Corporation" />
        <ReviewCard index={1} review="A parceria com a NetArise foi uma das mais produtivas que já tivemos. Eles combinaram excelência técnica com uma abordagem prática e moderna, entregando soluções robustas e visualmente impressionantes." 
            author="Marcus Feldman" 
            company="CTO — Dibble Inc." />
        <ReviewCard index={2} review="“Trabalhar com a NetArise foi uma experiência surpreendentemente fluida. Desde o início, a equipe demonstrou uma compreensão clara das nossas necessidades técnicas e uma atenção impecável aos detalhes de design e performance.”" 
            author="Elena Bergström" 
            company="CTO — Spotify AB" />
            <ReviewCard index={3} review="Trabalhar com a NetArise foi uma experiência surpreendentemente fluida. Desde o início, a equipe demonstrou uma compreensão clara das nossas necessidades técnicas e uma atenção impecável aos detalhes de design e performance." 
            author="Elena Bergström" 
            company="CTO — Spotify AB" />
            <ReviewCard index={4} review="Trabalhar com a NetArise foi uma experiência surpreendentemente fluida. Desde o início, a equipe demonstrou uma compreensão clara das nossas necessidades técnicas e uma atenção impecável aos detalhes de design e performance." 
            author="Elena Bergström" 
            company="CTO — Spotify AB" />
            <ReviewCard index={5} review="Trabalhar com a NetArise foi uma experiência surpreendentemente fluida. Desde o início, a equipe demonstrou uma compreensão clara das nossas necessidades técnicas e uma atenção impecável aos detalhes de design e performance." 
            author="Elena Bergström" 
            company="CTO — Spotify AB" />

      </ReviewCarousel>
  </div>
  )
} 