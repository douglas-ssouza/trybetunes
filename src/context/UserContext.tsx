import React from 'react';

interface User {
  name: string;
  email: string;
  description: string;
  image: string;
}

interface IUserContext {
  user: User;
  setUser: (newUser: User) => void;
}

type UserContextProps = {
  children: React.ReactNode;
}

const contextInitialValue = {
  user: {
    name: '', email: '', description: '', image: '',
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
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
