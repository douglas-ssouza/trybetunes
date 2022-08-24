import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import User from './pages/User';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
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
