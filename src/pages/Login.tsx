import React, { useState } from 'react';

import { Container, TextField, Button } from '@mui/material';

function Login() {
  const [name, setValue] = useState('');

  return (
    <Container>
      <TextField
        label="Digite seu nome"
        name="name"
        value={name}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        disabled={name.length < 3}
      >
        Entrar
      </Button>
    </Container>
  );
}

export default Login;
