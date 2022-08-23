import React from 'react';

import { IUserContext } from '../interfaces/User';

interface UserContextProps {
  children: React.ReactNode;
}

const contextInitialValue = {
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

export function Provider({ children }: UserContextProps) {
  const [user, setUser] = React.useState(contextInitialValue.user);

  const contextValue = React.useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}
