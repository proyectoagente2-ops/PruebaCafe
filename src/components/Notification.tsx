import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import OptimizedImage from './OptimizedImage';
import { useNotificationStore } from '../lib/notificationStore';
import { useCart } from '@/lib/store';


const AnimatePresenceWrapper = ({ children }: { children: React.ReactNode }) => {
  return AnimatePresence({ children, mode: "popLayout" });
};

export const NotificationContainer = () => {
  const store = useNotificationStore();
  const notifications = store.notifications;
  const removeNotification = store.removeNotification;
  const { setIsCartOpen } = useCart();

  const handleNotificationClick = useCallback((id: string) => {
    setIsCartOpen(true);
    removeNotification(id);
  }, [removeNotification, setIsCartOpen]);

  // Auto-eliminar notificaciones después de 3 segundos
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        removeNotification(notifications[0].id);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notifications, removeNotification]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999]">
      <AnimatePresenceWrapper>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9, transition: { duration: 0.3 } }}
            className="bg-gradient-to-r from-[#D97706] via-[#B45309] to-[#92400E] text-amber-50 rounded-xl shadow-2xl p-4 mb-3 flex items-center gap-3 cursor-pointer hover:from-[#C2410C] hover:via-[#B45309] hover:to-[#7C2D12] transition-all duration-200 min-w-[320px] max-w-[450px] backdrop-blur-sm border border-amber-200/70"
            onClick={() => handleNotificationClick(notification.id)}
          >
            {notification.image && (
              <OptimizedImage
                src={notification.image}
                alt="Notification image"
                className="w-12 h-12 object-cover rounded border-2 border-white/40"
                blur={false}
              />
            )}
            <div className="flex-1">
              <h4 className="font-bold text-amber-50 text-base">{notification.title}</h4>
              <p className="text-sm text-amber-50/90">{notification.message}</p>
            </div>
            {/* Icono de cerrar */}
            <div className="text-amber-50/70 hover:text-amber-50 text-xl font-bold">×</div>
          </motion.div>
        ))}
      </AnimatePresenceWrapper>
    </div>
  );
};