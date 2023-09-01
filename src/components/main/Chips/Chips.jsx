
import ChipsContainer from './ChipsContainer';
import ChipBtn from './ChipBtn';

const Chips = ({ data, getPokemonInfo, setPokemon }) => {
  return (
    <ChipsContainer>
      {data.map((item, idx) => (
        <ChipBtn
          key={idx}
          item={item}
          getPokemonInfo={getPokemonInfo}
          setPokemon={setPokemon}
        />
      ))}
    </ChipsContainer>
  )
}

export default Chips