import { createTheme } from '@mui/material/styles';

const oceanGreen = '#01A5B1';
const darkGrey = '#131E2F';

const paletteTheme = createTheme({
  palette: {
    primary: {
      main: oceanGreen,
    },
    secondary: {
      main: darkGrey,
    },
  },
});

export default paletteTheme;
