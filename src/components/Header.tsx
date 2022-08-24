import React, { useContext } from 'react';

import { useTheme } from '@emotion/react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { StyledTabs, StyledTab } from './headerComponents';

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
            <StyledTabs>
              <StyledTab label="Search" />
              <StyledTab label="Favorites" />
              <StyledTab label="Profile" />
            </StyledTabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
