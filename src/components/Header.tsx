import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';

import CustomTab from './CustomTab';

import ElevationScroll from './helpers/ElevationScroll';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
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
        <AppBar>
          <Toolbar>
            <Typography component="h2" variant="h4" color={theme.palette.common.white}>
              {user.name}
            </Typography>
            <Tabs value={tabValue} onChange={handleTabChange} sx={{ margin: 'auto' }}>
              <CustomTab
                label="Search"
                selected={tabValue === 0}
                component={Link}
                to="/search"
              />
              <CustomTab
                label="Favorites"
                component={Link}
                to="/favorites"
                selected={tabValue === 1}
              />
              <CustomTab
                label="Profile"
                component={Link}
                to="/profile"
                selected={tabValue === 2}
              />
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
