import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import Index from '@/pages/Index';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'productos',
        element: <Products />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
