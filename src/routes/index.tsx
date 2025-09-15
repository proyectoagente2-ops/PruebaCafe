import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';
import Index from '@/pages/Index';
import CafePage from '@/pages/CafePage';
import Turismo from '@/pages/Turismo';
import Nosotros from '@/pages/Nosotros';
import Contacto from '@/pages/Contacto';
import NotFound from '@/pages/NotFound';
import ProductDetailPage from '@/pages/ProductDetailPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';

// Mapeo de hashes antiguos a nuevas rutas
const HASH_REDIRECTS = {
  'tourism': '/turismo',
  'about': '/nosotros',
  'contact': '/contacto'
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
        // Maneja redirecciones de hash en la página principal
        loader: ({ request }) => {
          const url = new URL(request.url);
          const hash = url.hash.replace('#', '');
          if (hash && HASH_REDIRECTS[hash]) {
            return Response.redirect(HASH_REDIRECTS[hash]);
          }
          return null;
        }
      },
      {
        path: 'cafe',
        element: <CafePage />
      },
      {
        path: 'cafe/:id',
        element: <ProductDetailPage />
      },
      {
        path: 'servicios',
        element: <ServicesPage />
      },
      {
        path: 'servicios/:id',
        element: <ServiceDetailPage />
      },
      {
        path: 'turismo',
        element: <Turismo />
      },
      {
        path: 'nosotros',
        element: <Nosotros />
      },
      {
        path: 'contacto',
        element: <Contacto />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]);
