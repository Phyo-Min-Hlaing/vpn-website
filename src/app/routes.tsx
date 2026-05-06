import React from 'react';
import { createBrowserRouter } from 'react-router';
import { RootLayout } from './components/layout/RootLayout';
import { Home } from './pages/Home';
import { PlanDetails } from './pages/PlanDetails';
import { Orders } from './pages/Orders';
import { Profile } from './pages/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'plan/:id', Component: PlanDetails },
      { path: 'orders', Component: Orders },
      { path: 'profile', Component: Profile },
    ],
  },
]);
