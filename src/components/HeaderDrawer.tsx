import React, { useState } from 'react';

import { useTheme } from '@mui/material/styles';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';

import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

function HeaderDrawer() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={isDrawerOpen}
        onOpen={() => setDrawerOpen(true)}
        onClose={() => setDrawerOpen(false)}
        sx={{ '& .MuiDrawer-paper': { backgroundColor: theme.palette.primary.main } }}
      >
        <Toolbar />
        <List>
          <ListItem>
            <ListItemText>Search</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Favorites</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Sair</ListItemText>
            <ListItemIcon>
              <LogoutIcon sx={{ marginLeft: 'auto' }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        onClick={() => setDrawerOpen(!isDrawerOpen)}
        sx={{ ml: 'auto' }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default HeaderDrawer;
