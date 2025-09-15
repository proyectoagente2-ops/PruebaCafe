import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CartProvider } from '@/lib/store';
import Header from '@/components/Header';

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <TooltipProvider>
          <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
            <Header />
            <main>
              <Outlet />
            </main>
            <Toaster />
          </div>
        </TooltipProvider>
      </CartProvider>
    </QueryClientProvider>
  );
}
