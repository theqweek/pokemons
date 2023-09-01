import { CardContent, Typography, styled } from '@mui/material'

const StyledCardContent = styled(CardContent)(() => ({
  padding: 0
}))

const StyledTypography = styled(Typography)({
  color: '#A0A0A0',
  fontFamily: 'Raleway',
  fontSize: '17px',
  fontStyle: 'normal',
  fontWeight: 500,
  lineHeight: '150%',
});

const CardInfo = ({ pokemon }) => {
  return (
    <StyledCardContent>
      <StyledTypography>Снялся в { pokemon.episodes } сериях</StyledTypography>
      <StyledTypography>Id: { pokemon.id }</StyledTypography>
      <StyledTypography>height: { pokemon.height }</StyledTypography>
      <StyledTypography>attack: { pokemon.attack }</StyledTypography>
    </StyledCardContent>
  )
}

export default CardInfo