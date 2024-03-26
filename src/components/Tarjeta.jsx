import { useState } from "react";

const Tarjeta = ({ nombre, imagen, onGeneralClick }) => {
  const [clicks, setClicks] = useState(0);
    const [girada, setGirada] = useState(false);

    const handleClick = () => {
        // cambiar la manera en la que gira ahora.

        setClicks(clicks + 1);
        setGirada(!girada); // Cambia el estado de girada al contrario
        onGeneralClick();
    }

    return (
        <div className={`rounded overflow-hidden shadow-lg bg-zinc-100 p-5 text-gray-700 text-center h-[304px] ${girada ? 'girando' : ''}`} onClick={handleClick} >
            {!girada && (
                <>
                    <p className="pb-5 text-base">
                        Clicks: {clicks}
                    </p>
                    <img className="mx-auto h-44" src={imagen} alt={nombre} /> 
                    <div className="mt-4 text-xl">
                        {nombre}
                    </div>
                </>
            )}
        </div>
    );
};

export default Tarjeta;
