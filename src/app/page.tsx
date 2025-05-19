import Clients from "./components/Clients";
import Services from "./components/Services";
import Team from "./components/Team";


export default function Home() {
  return (
    <>
      <Clients />
      <Services/>
      <Team />
      <div className="h-screen flex justify-center items-center bg-[#F4F5F7]" id="Contact">
        <p>Contato</p>
      </div>
    </>
  );
}
