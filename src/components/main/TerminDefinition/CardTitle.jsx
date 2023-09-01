import { CardHeader, styled } from '@mui/material'

const StyledCardHeader = styled(CardHeader)(() => ({
  color: '#A0A0A0',
  fontFamily: 'Raleway',
  fontSize: '48px',
  fontWeight: 700,
  lineHeight: '100%',
  padding: 0
}))

const CardTitle = ({ title }) => {
  return (
    <StyledCardHeader 
      disableTypography
      title={title}
    />
  )
}

export default CardTitle