import { Container, styled } from '@mui/material'

const StyledContainer = styled(Container)(() => ({
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  alignItems: 'center',
  alignContent: 'center',
  columnGap: '6px',
  alignSelf: 'stretch',
}))

const ChipsContainer = ({ children }) => {
  return (
    <StyledContainer disableGutters>
      {children}
    </StyledContainer>
  )
}

export default ChipsContainer