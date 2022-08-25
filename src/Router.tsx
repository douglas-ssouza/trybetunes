import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/login';
import User from './pages/User';
import Search from './pages/search';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Profiles from './pages/Profiles';
import Profile from './pages/profile';
import ProfileEdit from './pages/profileEdit';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <Routes>
      <Route path="" element={<Login />} />
      <Route path="user" element={<User />}>
        <Route index element={<Search />} />
        <Route path="search" element={<Search />} />
        <Route path="album/:id" element={<Album />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<Profiles />}>
          <Route index element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default Router;
