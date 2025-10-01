import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from './ui/sonner';
import { RouterProvider } from 'react-router-dom';
import { router } from '../routes';

const queryClient = new QueryClient();

export function AppProviders() {
  return (
    <TooltipProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </TooltipProvider>
  );
}
