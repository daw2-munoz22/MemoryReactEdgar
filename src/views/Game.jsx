import GrupoTarjetas from "../components/GrupoTarjetas";
import { useState, useEffect } from 'react';

const Game = () => {
    const [clicks, setClicks] = useState(0);
    const [pokemonAletorios, setPokemonsAleatorias] = useState([]);

    useEffect(() => {
        async function fetchData(){
            try {
                const pokemons = []
                for(let i = 0; i < 9; i++) {
                    const random = Math.floor(Math.random() * 1000)
                    const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + random);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const data = await response.json();
                    console.log(data.name);
                    pokemons.push({
                        id: data.id,
                        nombre: data.name,
                        imagen: data.sprites.other['official-artwork'].front_default,
                    })
                }
                
                console.log('pokemons', pokemons);
                
                // Duplicar las tarjetas
                const duplicatedPokemons  = [...pokemons, ...pokemons];
                
                // Ordenar aleatoriamente las tarjetas
                const pokemonRandom = duplicatedPokemons .sort(() => Math.random() - 0.5);
                
                setPokemonsAleatorias(pokemonRandom);
            } catch (error) {
                console.error(error.message);
            } finally {
                console.log('Petición finalizada');
            }        
        }
        
        fetchData();
    }, []);

    const handleGeneralClick = () => {
        setClicks(clicks + 1);
    }

    
    return (
        <div className="h-screen">
            <div className='mx-auto bg-slate-900'>
                <h1 className="text-3xl text-center text-white uppercase pt-6">Pokemons Memory</h1>
                <div className="container mx-auto">
                    <button className="text-white bg-gray-800 px-4 py-2 rounded mt-4 ">
                        Clics Generales ({clicks})
                    </button>
                </div>
                <GrupoTarjetas datos={pokemonAletorios} onGeneralClick={handleGeneralClick}/>
            </div>
        </div>
    )
}

export default Game
