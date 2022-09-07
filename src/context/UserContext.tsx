import React from 'react';

import IContext from '../interfaces/IContext';

import Track from '../interfaces/Track';
import User from '../interfaces/User';

const favorites = localStorage.getItem('favorites');
let savedFavorites: Track[] = [];
if (favorites) {
  savedFavorites = JSON.parse(favorites) as Track[];
}

const user = localStorage.getItem('user');
let savedUser: User | null = null;
if (user) {
  savedUser = JSON.parse(user) as User;
}

export const contextInitialValue = {
  user: {
    name: savedUser?.name || '',
    email: savedUser?.email || '',
    description: savedUser?.description || '',
    image: savedUser?.image || '',
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
