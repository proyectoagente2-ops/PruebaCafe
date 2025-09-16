export function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('ServiceWorker registrado con éxito:', registration.scope);
        })
        .catch((error) => {
          console.error('Error al registrar el ServiceWorker:', error);
        });
    });
  }
}