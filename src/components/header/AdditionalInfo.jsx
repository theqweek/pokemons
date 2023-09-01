import { Box, Typography, styled } from '@mui/material'

const FingerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="31" viewBox="0 0 25 31" fill="none">
    <path d="M14.9084 12.2187C14.7547 11.354 13.9564 10.7727 13.1124 10.9227C12.2742 11.0717 11.7209 11.9026 11.8729 12.7582L12.7146 17.4937L11.7028 17.6735L9.93113 7.70562C9.77561 6.83059 8.97586 6.24098 8.1318 6.39099C7.29357 6.53997 6.73845 7.36063 6.89566 8.24513L8.81631 19.0515C6.32285 17.1107 3.12935 15.0578 2.21404 16.4302C1.31805 17.7736 4.71484 20.433 9.90176 26.6424C12.2388 29.4401 14.8782 31.1926 18.6825 30.517C22.8736 29.7721 25.6444 25.6418 24.8712 21.2917L23.3792 12.8967C23.2239 12.023 22.4243 11.4344 21.5803 11.5844C20.7421 11.7334 20.1888 12.5646 20.3437 13.4362L20.8092 16.055L19.7973 16.2348L19.1424 12.5499C18.9887 11.685 18.1904 11.1035 17.3463 11.2536C16.5081 11.4025 15.9523 12.2191 16.1069 13.0895L16.5752 15.7241L15.5634 15.904L14.9084 12.2187Z" fill="white"/>
    <path d="M16.7504 8.44786L16.7046 9.51161L12.5931 9.26753L12.6389 8.20379L16.7484 8.44774L16.7504 8.44786Z" fill="#1986EC"/>
    <path d="M7.51714 0L8.26377 4.20083L7.25195 4.38067L6.50532 0.179834L7.51714 0Z" fill="#1986EC"/>
    <path d="M11.5709 5.64038L10.789 4.93738L13.4646 1.73474L14.2463 2.43775L11.5709 5.64038Z" fill="#1986EC"/>
    <path d="M4.93363 10.6289L4.52414 9.64605L0.748535 11.2919L1.15802 12.2748L4.93363 10.6289Z" fill="#1986EC"/>
    <path d="M4.64343 6.87161L5.13513 5.94227L1.51993 3.85764L1.02823 4.78698L4.64343 6.87161Z" fill="#1986EC"/>
  </svg>
)

const StyledInfoBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent:"space-between",
  wrap: 'nowrap',
  gap: '10px',
}))

const StyledInfoTypography = styled(Typography)(() => ({
  margin: 'auto',
  fontFamily: "Raleway",
  fontSize: "12px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "100%",
  letterSpacing: '0',
  whiteSpace: 'pre-line'
}))

const AdditionalInfo = () => {
  return (
    <StyledInfoBox>
      <FingerIcon />
      <StyledInfoTypography component='div'>
        Нажмите на {'\n'} нужное Покемона
      </StyledInfoTypography>
    </StyledInfoBox>
  )
}

export default AdditionalInfo