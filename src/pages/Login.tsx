import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, TextField, Button } from '@mui/material';

function Login() {
  const [name, setValue] = useState('');

  const navigate = useNavigate();

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
        onClick={() => { navigate('user/search'); }}
      >
        Entrar
      </Button>
    </Container>
  );
}

export default Login;
