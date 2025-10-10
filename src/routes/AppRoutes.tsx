'use client';

import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';

// Lazy loading de páginas
const Index = React.lazy(() => import('@/pages/Index'));
const ServicesPage = React.lazy(() => import('@/pages/ServicesPage'));
const CafePage = React.lazy(() => import('@/pages/CafePage'));
const ProductsPage = React.lazy(() => import('@/pages/ProductsPage'));
const ProductDetailPage = React.lazy(() => import('@/pages/ProductDetailPage'));
const ServiceDetailPage = React.lazy(() => import('@/pages/ServiceDetailPage'));
const MochilasPage = React.lazy(() => import('@/pages/MochilasPage'));
const Turismo = React.lazy(() => import('@/pages/Turismo'));
const Nosotros = React.lazy(() => import('@/pages/Nosotros'));
const Contacto = React.lazy(() => import('@/pages/Contacto'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-amber-400 border-t-transparent rounded-full animate-spin" />
  </div>
);

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Index />
            </Suspense>
          }
        />
        <Route
          path="/servicios"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path="/servicios/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/cafe"
          element={
            <Suspense fallback={<PageLoader />}>
              <CafePage />
            </Suspense>
          }
        />
        <Route
          path="/cafe/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/servicios/:id"
          element={
            <Suspense fallback={<PageLoader />}>
              <ServiceDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/mochilas"
          element={
            <Suspense fallback={<PageLoader />}>
              <MochilasPage />
            </Suspense>
          }
        />
        <Route
          path="/productos"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProductsPage />
            </Suspense>
          }
        />
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
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}