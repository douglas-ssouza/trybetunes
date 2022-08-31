import React from 'react';

import { IUserContext } from '../interfaces/User';

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

export const UserContext = React.createContext<IUserContext>(contextInitialValue);
