'use client';

import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import RootLayout from '@/layouts/RootLayout';

// Lazy loading de páginas con manejo de errores
const lazyLoad = (importPromise: Promise<any>) => 
  React.lazy(() => 
    importPromise.catch((err) => {
      console.error('Error loading component:', err);
      return { default: () => <Navigate to="/404" replace /> };
    })
  );

// Componentes con lazy loading
const Index = lazyLoad(import('@/pages/Index'));
const ServicesPage = lazyLoad(import('@/pages/ServicesPage'));
const CafePage = lazyLoad(import('@/pages/CafePage'));
const CafeDetailPage = lazyLoad(import('@/pages/CafeDetailPage'));
const ServiceDetailPage = lazyLoad(import('@/pages/ServiceDetailPage'));
const MochilasPage = lazyLoad(import('@/pages/MochilasPage'));
const MochilaDetailPage = lazyLoad(import('@/pages/MochilaDetailPage'));
const Turismo = lazyLoad(import('@/pages/Turismo'));
const Nosotros = lazyLoad(import('@/pages/Nosotros'));
const Contacto = lazyLoad(import('@/pages/Contacto'));
const NotFound = lazyLoad(import('@/pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

// Error boundary component
const ErrorFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Ha ocurrido un error</h2>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-amber-400 text-white rounded-md"
      >
        Recargar página
      </button>
    </div>
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        {/* Página de inicio */}
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Index />
              </ErrorBoundary>
            </Suspense>
          }
        />

        {/* Servicios */}
        <Route path="/servicios">
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServiceDetailPage />
              </Suspense>
            }
          />
        </Route>

        {/* Café */}
        <Route path="/cafe">
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <CafePage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ErrorBoundary FallbackComponent={ErrorFallback}>
                  <CafeDetailPage />
                </ErrorBoundary>
              </Suspense>
            }
          />
        </Route>

        {/* Mochilas */}
        <Route path="/mochilas">
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <MochilasPage />
              </Suspense>
            }
          />
          <Route
            path=":id"
            element={
              <Suspense fallback={<PageLoader />}>
                <MochilaDetailPage />
              </Suspense>
            }
          />
        </Route>

        {/* Otras rutas */}
        <Route
          path="/turismo"
          element={
            <Suspense fallback={<PageLoader />}>
              <Turismo />
            </Suspense>
          }
        />
        <Route
          path="/nosotros"
          element={
            <Suspense fallback={<PageLoader />}>
              <Nosotros />
            </Suspense>
          }
        />
        <Route
          path="/contacto"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contacto />
            </Suspense>
          }
        />

        {/* Rutas especiales */}
        <Route
          path="/404"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />

        {/* Ruta wildcard - Debe ser la última */}
        <Route
          path="*"
          element={<Navigate to="/404" replace />}
        />
      </Route>
    </Routes>
  );
}