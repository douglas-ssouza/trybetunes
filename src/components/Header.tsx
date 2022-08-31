import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import MenuIcon from '@mui/icons-material/Menu';

import HeaderTabs from './HeaderTabs';

import ElevationScroll from './helpers/ElevationScroll';

import { UserContext } from '../context/UserContext';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const [tabValue, setTabValue] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isScreenSmall = useMediaQuery(theme.breakpoints.down('md'));

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    setUser({
      name: '', email: '', description: '', image: '',
    });
  };

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography component="h2" variant="h4" color={theme.palette.common.white}>
              {user.name}
            </Typography>
            {
              isScreenSmall
                ? (
                  <IconButton
                    sx={{ ml: 'auto' }}
                    disableRipple
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                  >
                    <MenuIcon fontSize="large" />
                  </IconButton>
                )
                : (
                  <HeaderTabs
                    tabValue={tabValue}
                    handleTabChange={handleTabChange}
                    handleLogout={handleLogout}
                  />
                )
            }
            <SwipeableDrawer
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              onOpen={() => setIsDrawerOpen(true)}
              disableBackdropTransition={!iOS}
              disableDiscovery={iOS}
            >
              <List>
                <ListItem component={Link} to="/search" onClick={() => setTabValue(0)}>
                  <ListItemText>
                    Search
                  </ListItemText>
                </ListItem>
                <ListItem component={Link} to="/favorites" onClick={() => setTabValue(1)}>
                  <ListItemText>
                    Favorites
                  </ListItemText>
                </ListItem>
                <ListItem component={Link} to="/profile" onClick={() => setTabValue(2)}>
                  <ListItemText>
                    Profile
                  </ListItemText>
                </ListItem>
              </List>
            </SwipeableDrawer>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default Header;
