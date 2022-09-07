import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { UserContext } from '../../context/UserContext';

import User from '../../interfaces/User';

function EditProfile() {
  const { user, setUser } = useContext(UserContext);
  const {
    name, email, description, image,
  } = user;

  const navigate = useNavigate();

  const [state, setState] = useState<User>(() => ({
    name,
    email,
    description,
    image,
  }));

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleClick = () => {
    localStorage.setItem('name', state.name);
    localStorage.setItem('email', state.email);
    localStorage.setItem('description', state.description);
    localStorage.setItem('image', state.image);
    setUser(state);
    navigate('/profile');
  };

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item xs={12} textAlign="center">
        {
          image
            ? <img src={image} alt={`${name} profile`} height="150px" />
            : <Box><AccountBoxIcon sx={{ fontSize: 150 }} /></Box>
        }
      </Grid>
      <Grid item xs={8}>
        <TextField
          placeholder="Digite seu nome"
          onChange={handleChange}
          name="name"
          value={state.name}
          fullWidth
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          placeholder="Digite seu email"
          onChange={handleChange}
          name="email"
          value={state.email}
          fullWidth
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          placeholder="Digite sua descrição "
          onChange={handleChange}
          name="description"
          value={state.description}
          multiline
          rows={3}
          fullWidth
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          placeholder="Insira o caminho da imagem"
          onChange={handleChange}
          name="image"
          value={state.image}
          fullWidth
        />
      </Grid>
      <Grid item xs={8}>
        <Button
          variant="contained"
          onClick={handleClick}
          fullWidth
        >
          Salvar
        </Button>
      </Grid>
    </Grid>
  );
}

export default EditProfile;
