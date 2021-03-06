import { useGetPokemonByNameQuery } from '../../rt-query/pokemons';
import { useEffect } from 'react';

const Pokemon = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  if (isLoading) return <span>Cargando Pokemon....</span>;

  return (
    <div>
      <h1>Pokemon - query - Redux Toolkit</h1>
      { data && (
        <>
          <h3>{ data.name }</h3>
          <img src={data.sprites.front_default} alt={data.name} />

          <br />
          <h3>Habilidades</h3>
          <ul style={{
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            }}>
            { data.abilities.map((ability, index) => (
              <li key={`ability-${index}`}>Ability: { ability.ability.name } - Slot: { ability.slot }</li>
            )) }
          </ul>

          <br />
          <br />
          <h3>Movimientos</h3>
          <ul style={{
            listStyleType: 'none',
            margin: '0',
            padding: '0',
            }}>
            { data.moves.map((move, index) => (
              <li key={`ability-${index}`}>{ move.move.name }</li>
            )) }
          </ul>
        </>
      ) }
    </div>
  );
};

export default Pokemon;
