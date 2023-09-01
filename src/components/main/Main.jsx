import { Box, Container, styled } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'
import Chips from './Chips/Chips'
import axios from 'axios'
import { API } from '../../constants/API'
import TerminDefinition from './TerminDefinition/TerminDefinition'

const StyledMainContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: "space-between",
  gap: '12px',
  wrap: 'nowrap',
}))

const StyledBox = styled(Box)(() => ({
  width: '100%',
  height: '500px',
}))

const getPokemonInfo = pokemon => {
  return {
    episodes: pokemon.moves.length,
    name: pokemon.name,
    id: pokemon.id,
    height: pokemon.height,
    attack: pokemon.stats.filter(item => item.stat.name === 'attack')[0].base_stat,
    image: pokemon.sprites.front_default,
  }
}

const Main = () => {

  const [data, setData] = useState([]);
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    
    const getPokemonData = async url => {
      try {
        const response = await axios.get(url);
        return response.data
      } catch (e) {
        console.log("Something went wrong", e);
      }
    }

    const getAllData = async url => {
      try {
        const response = await axios.get(url);
        const urls = await response.data.results.map(item => item.url);
        const requests = urls.map(url => getPokemonData(url))
        Promise.all(requests)
          .then(responses => {
            setData(responses)
            console.log(responses[0]);
            setPokemon(() => getPokemonInfo(responses[0]))
          })
          .catch((e) => console.log(e))
      } catch (e) {
        console.log("Something went wrong", e);
      }
    }
    
    getAllData(API)
  }, [])
  

  return (  
    <StyledMainContainer disableGutters>

      <StyledBox>
        <Chips data={data} getPokemonInfo={getPokemonInfo} setPokemon={setPokemon}/>
      </StyledBox>

      <StyledBox>
        <TerminDefinition pokemon={pokemon}/>
      </StyledBox>
  
    </StyledMainContainer>
  )
}

export default Main