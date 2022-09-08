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

  const listItems = [
    { name: 'Search', link: '/search', value: 0 },
    { name: 'Favorites', link: '/favorites', value: 1 },
    { name: 'Profile', link: '/profile', value: 2 },
  ];

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
          {
            listItems.map((item) => (
              <ListItem
                key={`${item.name}-${item.value}`}
                component={Link}
                to={item.link}
                button
                selected={value === item.value}
                onClick={() => handleItemClick(item.value)}
              >
                <ListItemText>{item.name}</ListItemText>
              </ListItem>
            ))
          }
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
