
const Header = () => {
  return (
    <div className=" justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
      <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Home
        </p>
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Pokemons Memory
        </p>
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Marvel Memory
        </p>
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Otro Memory
        </p>
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Quienes Somos?
        </p>
        <p className="text-lg font-bold text-white mb-4 bg-yellow-800 transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
          Acerca de ...
        </p>
      </div>
    </div>
  )
}

export default Header