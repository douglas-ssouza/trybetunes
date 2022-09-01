import React from 'react';

import { UserContext, contextInitialValue } from './UserContext';

import User from '../interfaces/User';
import SearchResults from '../interfaces/SearchResults';
import Track from '../interfaces/Track';

interface UserContextProps {
  children: React.ReactNode;
}

function Provider({ children }: UserContextProps) {
  const [user, setUser] = React.useState<User>(contextInitialValue.user);
  const [albums, setAlbums] = React.useState<null | SearchResults[]>(contextInitialValue.albums);
  const [favorites, setFavorites] = React.useState<Track[]>(contextInitialValue.favorites);

  const contextValue = React.useMemo(() => ({
    user,
    setUser,
    albums,
    setAlbums,
    favorites,
    setFavorites,
  }), [user, albums, favorites]);

  return (
    <UserContext.Provider value={contextValue}>
      { children }
    </UserContext.Provider>
  );
}

export default Provider;
