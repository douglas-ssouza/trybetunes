import { createTheme } from '@mui/material/styles';

import paletteTheme from './paletteTheme';

const componentsTheme = createTheme(paletteTheme, {
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            opacity: 1,
            backgroundColor: paletteTheme.palette.primary.light,
            color: 'white',
          },
        },
      },
    },
  },
});

export default componentsTheme;
