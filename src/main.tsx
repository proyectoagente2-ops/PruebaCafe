import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { registerServiceWorker } from '@/lib/serviceWorker'
import { AppProviders } from '@/components/app-providers'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('No se encontró el elemento root')
}

// Crear el root y renderizar la aplicación
const element = (
  <React.StrictMode>
    <AppProviders />
  </React.StrictMode>
) as React.ReactElement

const root = createRoot(rootElement)
root.render(element)

// Registrar el Service Worker después de que la app esté montada
registerServiceWorker()
