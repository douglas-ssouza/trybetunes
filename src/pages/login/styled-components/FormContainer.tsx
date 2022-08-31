import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';

const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: '50px',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));

export default FormContainer;
