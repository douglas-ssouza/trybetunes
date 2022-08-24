import React, { useContext } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <AppBar data-testid="page-header">
      <Toolbar>
        <Typography component="h2" variant="h5">
          {user.name}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
