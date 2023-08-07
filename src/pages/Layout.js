import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const Layout = () => (
  <>
    <Logo />
    <Navbar />
    <Outlet />
  </>
);

export default Layout;