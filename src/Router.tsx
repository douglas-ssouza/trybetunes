import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profiles from './pages/Profiles';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="search" element={<Search />} />
        <Route path="album/:id" element={<Album />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="profile" element={<Profiles />}>
          <Route path="" element={<Profile />} />
          <Route path="edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
