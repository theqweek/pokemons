import { AppBar, Box, Container, Grid, Typography, styled } from '@mui/material'
import TitleText from './TitleText';
import AdditionalInfo from './AdditionalInfo';


const StyledHeaderContainer = styled(Container)(() => ({
  display: 'flex',
  position: 'relative',
  background: 'inherit',
  minHeight: '0px',
  justifyContent: "space-between",
  alignItems: "center"
}))

const Header = () => {
  return (
    <StyledHeaderContainer disableGutters>
      <TitleText />
      <AdditionalInfo />
    </StyledHeaderContainer>
  )
}
export default Header