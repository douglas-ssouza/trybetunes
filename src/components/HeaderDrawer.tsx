import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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

interface IProps {
  value: number;
  setValue: (value: number) => void;
  handleLogout: () => void;
}

function HeaderDrawer({ value, setValue, handleLogout }: IProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();

  const handleItemClick = (newValue: number) => {
    setDrawerOpen(false);
    setValue(newValue);
  };

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
          <ListItem
            component={Link}
            to="/search"
            button
            selected={value === 0}
            onClick={() => handleItemClick(0)}
          >
            <ListItemText>Search</ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/favorites"
            button
            selected={value === 1}
            onClick={() => handleItemClick(1)}
          >
            <ListItemText>Favorites</ListItemText>
          </ListItem>
          <ListItem
            component={Link}
            to="/profile"
            button
            selected={value === 2}
            onClick={() => handleItemClick(2)}
          >
            <ListItemText>Profile</ListItemText>
          </ListItem>
          <ListItem onClick={handleLogout}>
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
