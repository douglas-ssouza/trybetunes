import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Tabs from '@mui/material/Tabs';
import IconButton from '@mui/material/IconButton';

import LogoutIcon from '@mui/icons-material/Logout';

import CustomTab from './styled-components/CustomTab';

interface IProps {
  tabValue: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  handleLogout: () => void;
}

function HeaderTabs({ tabValue, handleTabChange, handleLogout }: IProps) {
  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ margin: 'auto' }}
        indicatorColor="secondary"
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
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
      <IconButton disableRipple onClick={handleLogout}>
        <LogoutIcon fontSize="large" />
      </IconButton>
    </>
  );
}

HeaderTabs.propTypes = {
  tabValue: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};

export default HeaderTabs;
