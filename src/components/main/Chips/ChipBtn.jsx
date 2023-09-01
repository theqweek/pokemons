import { Chip, styled } from '@mui/material'

const StyledChip = styled(Chip)(() => ({
  background: '#1986EC',
  padding: '20px',
  color: 'white',
  fontFamily: 'Raleway',
  fontSize: '20px',
  lineHeight: '100%',
  textTransform: 'none',
  letterSpacing: 0,
  borderRadius: '44px',
  transition: '0.3s',
  height: 'max-content',
  "& .MuiChip-label": {
    padding: '0'
  },
  "&:hover": {
    background: '#1986EC',
    opacity: 0.8
  }
}))

const ChipBtn = ({ item, getPokemonInfo, setPokemon }) => {
  return (
    <StyledChip
      onClick={() => setPokemon(getPokemonInfo(item))}
      clickable
      label={item.name}
    ></StyledChip>
  )
}

export default ChipBtn