import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

import StyledTab from './headerComponents';

import ElevationScroll from './helpers/ElevationScroll';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(newValue);
    setTabValue(newValue);
  };

  const handleLogout = () => {
    setUser({
      name: '', email: '', description: '', image: '',
    });
  };

  return (
    <>
      <ElevationScroll>
        <AppBar data-testid="page-header">
          <Toolbar>
            <Typography component="h2" variant="h4" color={theme.palette.common.white}>
              {user.name}
            </Typography>
            <Tabs onChange={handleTabChange} sx={{ margin: 'auto' }}>
              <StyledTab label="Search" component={Link} to="/search" />
              <StyledTab label="Favorites" component={Link} to="/favorites" />
              <StyledTab label="Profile" component={Link} to="/profile" />
            </Tabs>
            <IconButton component="button" disableRipple onClick={handleLogout}>
              <LogoutIcon fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
