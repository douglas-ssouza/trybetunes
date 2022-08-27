import { styled } from '@mui/material/styles';

import Tab from '@mui/material/Tab';

const StyledTab = styled(Tab)(({ theme }) => ({
  color: 'white',
  fontWeight: 600,
  margin: '0 50px',
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

export default StyledTab;
