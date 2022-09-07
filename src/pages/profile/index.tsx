import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AccountBoxIcon from '@mui/icons-material/AccountBox';

import { UserContext } from '../../context/UserContext';

function Profile() {
  const { user } = useContext(UserContext);
  const {
    name, email, description, image,
  } = user;

  return (
    <Grid container direction="column" alignItems="center">
      <Grid item>
        {
          image
            ? <img src={image} alt={`${name} profile`} />
            : <Box><AccountBoxIcon sx={{ fontSize: 150 }} /></Box>
        }
      </Grid>
      <Grid item>
        <Typography component="h2" variant="h6">
          {name}
        </Typography>
        <Typography component="h3" variant="subtitle1">
          {email}
        </Typography>
        <Typography component="p" variant="body1">
          {description}
        </Typography>
      </Grid>
      <Grid item>
        <Button component={Link} to="/profile/edit" variant="contained">
          Editar
        </Button>
      </Grid>
    </Grid>
  );
}

export default Profile;
