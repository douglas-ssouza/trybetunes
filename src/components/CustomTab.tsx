import { styled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

type TabProps = {
  selected?: boolean,
  component?: typeof Link,
  to?: string,
};

const CustomTab = styled(Tab)<TabProps>(({ theme }) => ({
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
}));

export default CustomTab;
