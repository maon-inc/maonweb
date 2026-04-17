import { createBrowserRouter, Navigate } from 'react-router-dom';

import { SiteLayout } from './SiteLayout';
import { HomePage } from '../pages/HomePage';
import { NotFoundPage } from '../pages/NotFoundPage';
import { PrivacyPage } from '../pages/PrivacyPage';
import { TermsPage } from '../pages/TermsPage';
import { AITransparencyPage } from '../pages/AITransparencyPage';
import { SupportPage } from '../pages/SupportPage';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'privacy',
        element: <PrivacyPage />,
      },
      {
        path: 'terms',
        element: <TermsPage />,
      },
      {
        path: 'tos',
        element: <Navigate replace to="/terms" />,
      },
      {
        path: 'ai-transparency',
        element: <AITransparencyPage />,
      },
      {
        path: 'support',
        element: <SupportPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
