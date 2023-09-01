import { CardMedia, styled } from '@mui/material'

const StyledCardMedia = styled(CardMedia)(() => ({
  height: '200px'
}))

const CardImage = ({ image }) => {
  return (
    <StyledCardMedia 
      image={image}
      component='img'
    />
  )
}

export default CardImage