import { createBrowserRouter, RouteObject } from 'react-router-dom';
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
const HASH_REDIRECTS: { [key: string]: string } = {
  'tourism': '/turismo',
  'about': '/nosotros',
  'contact': '/contacto'
};

const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
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
        path: 'productos/:productId',
        element: <ProductDetailPage />
      },
      {
        path: 'servicios',
        children: [
          {
            index: true,
            element: <ServicesPage />
          },
          {
            path: ':id',
            element: <ServiceDetailPage />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
];

export const router = createBrowserRouter(routes, {
  future: {
    // Usar la configuración estable disponible en la versión actual
    v7_normalizeFormMethod: true
  }
});