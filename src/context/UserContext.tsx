import React from 'react';

import IContext from '../interfaces/IContext';

export const contextInitialValue = {
  user: {
    name: '',
    email: '',
    description: '',
    image: '',
  },
  albums: [],
  setUser: () => {
    // do nothing
  },
  setAlbums: () => {
    // do nothing
  },
};

export const UserContext = React.createContext<IContext>(contextInitialValue);
