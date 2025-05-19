import Clients from "./components/Clients";
import Team from "./components/Team";


export default function Home() {
  return (
    <div>
      <Clients />
      <div className=" bg-[#F4F5F7] h-screen flex justify-center items-center" id="Services">
        <p>Serviços</p>
      </div>
      <Team />
      <div className="h-screen flex justify-center items-center bg-[#F4F5F7]" id="Contact">
        <p>Contato</p>
      </div>
    </div>
  );
}
