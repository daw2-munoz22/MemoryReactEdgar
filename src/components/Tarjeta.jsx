import { useState } from "react";

const Tarjeta = ({ nombre, imagen }) => {
  // Definimos el estado local para el contador de clics de esta tarjeta
  const [contador, setContador] = useState(0);

  // Función para manejar el clic en la tarjeta y actualizar el contador
  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <div
      className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden m-4 px-12 py-12"
      onClick={handleClick}
    >
      {/* Mostramos el número de clics dentro de la tarjeta */}
      <p className="p-4 font-bold text-xl mb-2">Clicks = {contador}</p>
      <div>
        <img className="w-full" src={imagen} alt={nombre} />
      </div>
      <p className="p-4 font-bold text-xl mb-2">{nombre}</p>
    </div>
  );
};

export default Tarjeta;
