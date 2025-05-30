import Clients from "./components/Clients";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import Services from "./components/Services";
import Team from "./components/Team";
import ScrollObserver from "@/app/utils/scroll-observer";

export default function Home() {
  return (
    <>
      <HomePage />
      <ScrollObserver>
        <Clients />
        <Services />
        <Team />
        <Contact />
      </ScrollObserver>
    </>
  );
}
