import Tarjeta from './Tarjeta'; // Importa el componente Tarjeta

const GrupoTarjetas = ({ datos, onGeneralClick }) => {
  return (
    <div className="grid grid-cols-3 gap-4 justify-center">
      {datos.map((item, index) => (
        <div key={index} className="p-4 bg-gray-200 rounded-lg shadow-md">
          <Tarjeta nombre={item.nombre} imagen={item.imagen} onGeneralClick={onGeneralClick}/>
        </div>
      ))}
    </div>
  );
};

export default GrupoTarjetas;
