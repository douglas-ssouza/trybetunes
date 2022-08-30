import { createTheme } from '@mui/material/styles';

import paletteTheme from './paletteTheme';

const componentsTheme = createTheme(paletteTheme, {
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            opacity: 1,
            color: 'white',
          },
        },
      },
    },
  },
});

export default componentsTheme;
