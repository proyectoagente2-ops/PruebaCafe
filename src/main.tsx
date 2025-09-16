import { createRoot } from 'react-dom/client'
import './index.css'
import { registerServiceWorker } from './lib/serviceWorker'
import { AppProviders } from './components/app-providers'
import { StrictMode } from 'react'

// Registrar el Service Worker
registerServiceWorker()

const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <AppProviders />
  </StrictMode>
)
