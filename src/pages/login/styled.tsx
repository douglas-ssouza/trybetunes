import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';

export const LoginContainer = styled(Container)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -75%)',
});

export const FormContainer = styled(Container)(({ theme }) => ({
  marginTop: '50px',
  [theme.breakpoints.up('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.up('md')]: {
    width: '70%',
  },
}));
