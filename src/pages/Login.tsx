import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function Login() {
  const [name, setValue] = useState('');

  const navigate = useNavigate();

  return (
    <Container sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -75%)',
    }}
    >
      <Typography component="h1" variant="h3" align="center">
        Trybetunes
      </Typography>
      <Container sx={{ marginTop: '50px', width: '70%' }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              label="Digite seu nome"
              name="name"
              value={name}
              onChange={(e) => setValue(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              disabled={name.length < 3}
              onClick={() => { navigate('user/search'); }}
              fullWidth
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Login;
