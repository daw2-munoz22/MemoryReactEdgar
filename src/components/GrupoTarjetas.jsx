import Tarjeta from './Tarjeta'; // Importa el componente Tarjeta

const GrupoTarjetas = ({ datos }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {datos.map((item, index) => (
        <Tarjeta key={index} nombre={item.nombre} imagen={item.imagen} />
      ))}
    </div>
  );
};

export default GrupoTarjetas