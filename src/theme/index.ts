import { deepmerge } from '@mui/utils';
import { createTheme } from '@mui/material/styles';

import paletteTheme from './paletteTheme';
import componentsTheme from './componentsTheme';

const theme = createTheme(deepmerge(paletteTheme, componentsTheme));

export default theme;
