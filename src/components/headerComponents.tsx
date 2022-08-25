import { styled } from '@mui/material/styles';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const StyledTabs = styled(Tabs)({
  marginLeft: 'auto',
});

export const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'white',
  fontWeight: 600,
  marginLeft: '50px',
  minWidth: '100px',
  borderRadius: '7px',
  opacity: 0.7,
  '&:hover': {
    opacity: 1,
    backgroundColor: theme.palette.primary.light,
  },
  '&:selected': {
    opacity: 1,
    backgroundColor: theme.palette.primary.light,
  },
})) as typeof Tab;
