import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { LoginContainer, FormContainer } from '../components/loginComponents';

import { UserContext } from '../context/UserContext';

function Login() {
  const [name, setValue] = useState('');

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = () => {
    setUser({ ...user, name });
    navigate('user/search');
  };

  return (
    <LoginContainer>
      <Typography component="h1" variant="h3" align="center">
        Trybetunes
      </Typography>
      <FormContainer>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome"
              name="name"
              value={name}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
              size="medium"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled={name.length < 3}
              onClick={handleClick}
              fullWidth
              size="large"
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
