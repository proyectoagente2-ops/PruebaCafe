import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from './ui/tooltip'
import { Toaster } from './ui/sonner'
import { RouterProvider } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { router } from '../routes'

const queryClient = new QueryClient()

export function AppProviders() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <RouterProvider router={router} />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  )
}