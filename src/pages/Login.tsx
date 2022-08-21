import React from 'react';

import { Container, TextField, Button } from '@mui/material';

function Login() {
  return (
    <Container>
      <TextField label="Digite seu nome" />
      <Button variant="contained">Entrar</Button>
    </Container>
  );
}

export default Login;
