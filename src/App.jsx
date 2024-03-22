import { arrayPersonajes } from "./bd/arrayPersonajes";
import GrupoTarjetas from "./components/GrupoTarjetas";
import Header from "./components/Header";
import Home from "./views/Home";


export default function App() {
  return (
    <div className="app">
      <h1 className="text-3xl font-bold ">
        <Header />
        <Home />
        <div className="flex justify-center cartas">
          <GrupoTarjetas datos={arrayPersonajes} />{" "}
          {/* Utiliza GrupoTarjetas para renderizar las tarjetas */}
        </div>
      </h1>
    </div>
  );
}
