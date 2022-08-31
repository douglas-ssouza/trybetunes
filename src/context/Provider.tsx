import React from 'react';

import { UserContext, contextInitialValue } from './UserContext';

import User from '../interfaces/User';
import SearchResults from '../interfaces/SearchResults';

interface UserContextProps {
  children: React.ReactNode;
}

function Provider({ children }: UserContextProps) {
  const [user, setUser] = React.useState<User>(contextInitialValue.user);
  const [albums, setAlbums] = React.useState<null | SearchResults[]>(contextInitialValue.albums);

  const contextValue = React.useMemo(() => ({
    user,
    setUser,
    albums,
    setAlbums,
  }), [user, albums]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}

export default Provider;
