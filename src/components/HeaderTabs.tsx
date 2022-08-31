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
  const tabs = [
    { label: 'Search', link: '/search' },
    { label: 'Favorites', link: '/favorites' },
    { label: 'Profile', link: '/profile' },
  ];

  return (
    <>
      <Tabs
        value={tabValue}
        onChange={handleTabChange}
        sx={{ margin: 'auto' }}
        indicatorColor="secondary"
        TabIndicatorProps={{ style: { display: 'none' } }}
      >
        {
          tabs.map(({ label, link }, index) => (
            <CustomTab
              label={label}
              selected={tabValue === index}
              component={Link}
              to={link}
            />
          ))
        }
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
