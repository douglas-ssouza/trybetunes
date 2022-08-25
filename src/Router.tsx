import React, { useEffect, useContext } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import Login from './pages/login';
import User from './pages/User';
import Search from './pages/search';
import Album from './pages/album';
import Favorites from './pages/favorites';
import Profiles from './pages/Profiles';
import Profile from './pages/profile';
import ProfileEdit from './pages/profileEdit';
import NotFound from './pages/NotFound';

import { UserContext } from './context/UserContext';

function Router() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const navigateToLogin = () => {
      if (!user.name) {
        navigate('/login');
      }
    };
    navigateToLogin();
  }, [user]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="" element={<User />}>
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
