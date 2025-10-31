import { motion, AnimatePresence } from 'framer-motion';
import { useNotificationStore } from '../lib/notificationStore';
import { useEffect } from 'react';
import OptimizedImage from './OptimizedImage';


const AnimatePresenceWrapper = ({ children }: { children: React.ReactNode }) => {
  return AnimatePresence({ children, mode: "popLayout" });
};

export const NotificationContainer = () => {
  const store = useNotificationStore();
  const notifications = store.notifications;
  const removeNotification = store.removeNotification;

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
    <div className="fixed top-20 right-4 z-[100]">
      <AnimatePresenceWrapper>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, x: 100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.8, transition: { duration: 0.3 } }}
            className="bg-white rounded-lg shadow-2xl p-4 mb-3 border-l-4 border-green-500 flex items-center gap-3 cursor-pointer hover:bg-green-50 transition-all duration-200 min-w-[320px] max-w-[400px] backdrop-blur-sm"
            onClick={() => removeNotification(notification.id)}
          >
            {notification.image && (
              <OptimizedImage
                src={notification.image}
                alt="Notification image"
                className="w-12 h-12 object-cover rounded"
                blur={false}
              />
            )}
            <div>
              <h4 className="font-semibold text-gray-800">{notification.title}</h4>
              <p className="text-sm text-gray-600">{notification.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresenceWrapper>
    </div>
  );
};