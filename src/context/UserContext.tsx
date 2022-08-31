import React from 'react';

import IContext from '../interfaces/IContext';

export const contextInitialValue = {
  user: {
    name: sessionStorage.getItem('name') || '',
    email: '',
    description: '',
    image: '',
  },
  albums: null,
  setUser: () => {
    // do nothing
  },
  setAlbums: () => {
    // do nothing
  },
};

export const UserContext = React.createContext<IContext>(contextInitialValue);
