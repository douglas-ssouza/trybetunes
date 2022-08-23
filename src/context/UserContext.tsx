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

export const UserContext = React.createContext<IUserContext | null>(null);

export function Provider({ children }: UserContextProps) {
  const [user, setUser] = React.useState({
    name: '',
    email: '',
    description: '',
    image: '',
  });

  const contextValue = React.useMemo(() => ({ user, setUser }), [user]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}
