import React, { useContext, useState, useEffect } from 'react';

import { useTheme } from '@mui/material/styles';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import HeaderTabs from './HeaderTabs';

import ElevationScroll from './helpers/ElevationScroll';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();

  useEffect(() => {
    const { pathname } = window.location;

    switch (pathname) {
      case '/search':
        setTabValue(0);
        break;
      case '/favorites':
        setTabValue(1);
        break;
      case '/profile':
        setTabValue(2);
        break;
      default:
        setTabValue(0);
        break;
    }
  }, [tabValue]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLogout = () => {
    sessionStorage.clear();
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
            <HeaderTabs
              tabValue={tabValue}
              handleTabChange={handleTabChange}
              handleLogout={handleLogout}
            />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
