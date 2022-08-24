import React, { useContext } from 'react';

import { AppBar, Toolbar, Typography } from '@mui/material';

import ElevationScroll from './helpers/ElevationScroll';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user } = useContext(UserContext);

  return (
    <>
      <ElevationScroll>
        <AppBar data-testid="page-header">
          <Toolbar>
            <Typography component="h2" variant="h4">
              {user.name}
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
