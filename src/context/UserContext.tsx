import React from 'react';

import IContext from '../interfaces/IContext';

import Track from '../interfaces/Track';

const favorites = localStorage.getItem('favorites');
let savedFavorites: Track[] = [];
if (favorites) {
  savedFavorites = JSON.parse(favorites) as Track[];
}

export const contextInitialValue = {
  user: {
    name: sessionStorage.getItem('name') || '',
    email: '',
    description: '',
    image: '',
  },
  albums: null,
  favorites: savedFavorites,
  setUser: () => {
    // do nothing
  },
  setAlbums: () => {
    // do nothing
  },
  setFavorites: () => {
    // do nothing
  },
};

export const UserContext = React.createContext<IContext>(contextInitialValue);
