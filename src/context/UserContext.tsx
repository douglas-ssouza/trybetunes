import React from 'react';

import { IUserContext } from '../interfaces/User';

export const contextInitialValue = {
  user: {
    name: '',
    email: '',
    description: '',
    image: '',
  },
  setUser: () => {
    // do nothing
  },
};

export const UserContext = React.createContext<IUserContext>(contextInitialValue);
