import { motion, AnimatePresence } from 'framer-motion';
import { useNotificationStore } from '../lib/notificationStore';
import { useEffect } from 'react';

export const NotificationContainer = () => {
  const notifications = useNotificationStore((state) => state.notifications);
  const removeNotification = useNotificationStore((state) => state.removeNotification);

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
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {notifications.map((notification) => (
          <motion.div
            key={notification.id}
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
            className="bg-white rounded-lg shadow-xl p-4 mb-2 border-l-4 border-green-500 flex items-center gap-3 cursor-pointer hover:bg-green-50 transition-colors min-w-[300px]"
            onClick={() => removeNotification(notification.id)}
          >
            {notification.image && (
              <img
                src={notification.image}
                alt=""
                className="w-12 h-12 object-cover rounded"
              />
            )}
            <div>
              <h4 className="font-semibold text-gray-800">{notification.title}</h4>
              <p className="text-sm text-gray-600">{notification.message}</p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};