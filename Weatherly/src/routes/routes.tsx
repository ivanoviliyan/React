import { createBrowserRouter } from 'react-router-dom';

import AuthPage from '../features/auth/AuthPage.tsx';
import DashboardPage from '../features/dashboard/DashboardPage.tsx';
import SettingsPage from '../features/settings/SettingsPage.tsx';
import NotFoundPage from '../components/NotFoundPage.tsx';

export const router = createBrowserRouter([
   {
      path: '/auth',
      element: <AuthPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/',
      element: <DashboardPage />,
      errorElement: <NotFoundPage />,
   },
   {
      path: '/settings',
      element: <SettingsPage />,
      errorElement: <NotFoundPage />,
   },
]);
