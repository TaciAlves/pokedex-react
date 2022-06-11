import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    return (
        <div>
            <div className="pokedex-header">
                <h1>Pokédex</h1>
                <img alt='pokebola-img' className='pokebola' src='https://purepng.com/public/uploads/large/purepng.com-pokeballpokeballdevicepokemon-ballpokemon-capture-ball-1701527825789urzm0.png' />
                <Pagination 
                    page={page+1}
                    totalPages={totalPages}
                    onLeftClick={onLeftClickHandler}
                    onRightClick={onRightClickHandler}
                />
            </div>
            {loading ? (
                <div className= 'pokedex-loading'>Carregando, segura ai...</div>  
            ) : (
                <div className='pokedex-grid'> 
                    {pokemons && pokemons.map((pokemon, index) => {
                        return (
                            <Pokemon key={index} pokemon={pokemon} />
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Pokedex;