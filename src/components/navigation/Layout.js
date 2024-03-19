// Layout.js
import React from 'react';
import LandingPage from './LandingPage';
import { Outlet } from 'react-router-dom';
import FinanceNavigation from '../finance/FinanceNav';

function Layout() {
  return (
    <div>
      <LandingPage /> 
      <Outlet />
    </div>
  );
}

export default Layout;
