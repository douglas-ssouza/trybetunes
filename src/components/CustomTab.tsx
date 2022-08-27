import { styled } from '@mui/material/styles';
import Tab, { TabProps } from '@mui/material/Tab';
import { Link } from 'react-router-dom';

interface IProps extends TabProps {
  selected?: boolean;
  component?: typeof Link;
  to?: string;
}

const CustomTab = styled(Tab)<IProps>(({ theme }) => ({
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
