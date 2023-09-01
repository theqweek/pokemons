import { Card, styled } from '@mui/material'
import CardTitle from './CardTitle'
import CardImage from './CardImage'
import CardInfo from './CardInfo'

const StyledTerminDefinition = styled(Card)(() => ({
  width: 'auto',
  margin: '44px',
  display: 'flex',
  height: '297px',
  flexDirection: 'column',
  gap: '44px',
  background: 'inherit',
  overflow: 'visible'
}))

const TerminDefinition = ({ pokemon }) => {

  console.log(pokemon);
  return (
    <StyledTerminDefinition>
      <CardTitle
        title={pokemon.name && pokemon.name.charAt(0).toUpperCase() + pokemon?.name.slice(1)}
      />
      <CardImage
        image={pokemon.image}
      />
      <CardInfo pokemon={pokemon}/>
    </StyledTerminDefinition>
  )
}

export default TerminDefinition