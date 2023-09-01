import { Box, Typography, styled } from '@mui/material'

const StyledHeaderBox = styled(Box)(() => ({
  border: '1px solid white',
  padding: '7px',
}))

const Title = styled(Typography)(() => ({
  letterSpacing: 0,
  fontFamily: "Raleway",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "112.682%",
  textTransform: "uppercase"
}))

const TitleText = () => {
  return (
    <StyledHeaderBox>
        <Title component='p'>
          Покемоны API
        </Title>
    </StyledHeaderBox>
  )
}

export default TitleText