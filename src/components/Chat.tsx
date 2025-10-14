import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Dialog } from '@headlessui/react';
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon, UserIcon } from '@heroicons/react/24/outline';
import { useChatStore } from '@/lib/chatStore';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

const WEBHOOK_URL = 'https://tpn8n.sierrasoft.co/webhook/8fabf32a-1ba2-4c9f-82de-a283e747bd08/chat';
const SESSION_ID = Math.random().toString(36).substring(7);

export function Chat() {
  const { 
    isOpen, 
    setIsOpen, 
    messages, 
    addMessage, 
    currentSession,
    initializeSession
  } = useChatStore();
  
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const [mounted, setMounted] = useState(false);

  // Efecto para la animación de entrada
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Efecto para inicializar la sesión cuando se abre el chat
  useEffect(() => {
    if (isOpen) {
      initializeSession();
    }
  }, [isOpen, initializeSession]);

  // Efecto separado para el mensaje de bienvenida
  useEffect(() => {
    if (isOpen && currentSession && messages.length === 0) {
      addMessage({
        id: 'welcome',
        text: '¡Hola! Soy el asistente virtual de La Felicidá. ¿En qué puedo ayudarte hoy? 😊',
        sender: 'bot',
        timestamp: new Date(),
      });
    }
  }, [isOpen, currentSession, messages.length, addMessage]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    const newMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user' as const,
      timestamp: new Date(),
    };

    addMessage(newMessage);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Cancelar cualquier solicitud pendiente anterior
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      
      // Crear nuevo AbortController para esta solicitud
      abortControllerRef.current = new AbortController();

      console.log('Enviando mensaje al webhook:', {
        message: inputMessage,
        sessionId: currentSession?.sessionId || SESSION_ID,
        timestamp: new Date().toISOString()
      });

      const response = await axios.post(WEBHOOK_URL, {
        message: inputMessage,
        sessionId: currentSession?.sessionId || SESSION_ID,
        timestamp: new Date().toISOString(),
        context: {
          sessionStartTime: currentSession?.startTime,
          lastActivity: currentSession?.lastActivity,
          messageCount: messages.length
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        signal: abortControllerRef.current.signal
      });

      console.log('Respuesta del webhook:', response.data);

      let botResponseText = '';
      // Primero intentamos obtener la respuesta del agente desde el campo específico de n8n
      if (response.data && response.data.agentResponse) {
        botResponseText = response.data.agentResponse;
      } else if (response.data && response.data.output) {
        // Fallback a otros campos posibles
        botResponseText = response.data.output;
      } else if (response.data && response.data.text) {
        botResponseText = response.data.text;
      } else if (typeof response.data === 'string') {
        botResponseText = response.data;
      } else {
        console.error('Estructura de respuesta inesperada:', response.data);
        botResponseText = 'Lo siento, no pude procesar tu mensaje. ¿Podrías intentarlo de nuevo?';
      }

      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot' as const,
        timestamp: new Date(),
      };

      addMessage(botMessage);
      setError(null);
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Agregar mensaje de error al chat
      const errorMessage = {
        id: (Date.now() + 1).toString(),
        text: 'Lo siento, hubo un problema al procesar tu mensaje. Por favor, intenta de nuevo en unos momentos.',
        sender: 'bot' as const,
        timestamp: new Date(),
      };
      
      addMessage(errorMessage);
      
      // Si es un error de axios, mostrar más detalles en la consola
      if (axios.isAxiosError(error)) {
        console.log('Error detallado:', {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data,
          headers: error.response?.headers
        });
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  // Limpiar el controlador al desmontar el componente
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {/* Botón flotante para abrir el chat con movimiento sutil */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: [0, -3, 0],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 p-4 bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 z-50 group flex items-center gap-3"
          whileHover={{ 
            scale: 1.03,
            y: 0,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div 
            className="relative"
            animate={{
              rotate: [-2, 2, -2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <ChatBubbleLeftIcon className="h-6 w-6" />
            <motion.span 
              className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"
              animate={{
                opacity: [1, 0.6, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          <span className="text-sm font-medium pr-1">
            ¿Necesitas ayuda?
          </span>
        </motion.button>

        {/* Ventana de chat */}
        {isOpen && (
          <Dialog
            as={motion.div}
            static
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 overflow-hidden"
          >
            <div className="flex items-end justify-end min-h-screen sm:items-center sm:p-4">
              <div 
                className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                aria-hidden="true"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full h-full"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 100, x: 0 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: 100 }}
                className="relative w-full sm:w-[400px] h-[600px] sm:h-[500px] bg-gradient-to-b from-white to-amber-50/30 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-amber-100/50"
              >
                {/* Header del chat */}
                <div className="p-4 bg-gradient-to-r from-amber-800 to-amber-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/10 p-2.5 shadow-inner">
                        <ChatBubbleLeftIcon className="h-full w-full text-white" />
                      </div>
                      <div>
                        <h2 className="font-medium text-white">Asistente de La Felicidá</h2>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <p className="text-xs text-amber-100">En línea</p>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="rounded-full p-2 hover:bg-white/10 transition-colors"
                    >
                      <XMarkIcon className="h-6 w-6 text-white" />
                    </button>
                  </div>
                </div>

                {/* Área de mensajes */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-amber-50/30 to-transparent">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className={cn(
                          "flex gap-3",
                          message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                      >
                        {message.sender === 'bot' && (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 p-1.5 flex-shrink-0">
                            <ChatBubbleLeftIcon className="h-full w-full text-white" />
                          </div>
                        )}
                        <motion.div
                          className={cn(
                            "max-w-[80%] p-3 rounded-2xl shadow-md",
                            message.sender === 'user' 
                              ? 'bg-gradient-to-br from-amber-700 to-amber-900 text-white ml-4'
                              : 'bg-white border border-amber-100'
                          )}
                        >
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <span className="text-[10px] mt-1.5 block opacity-70">
                            {new Date(message.timestamp).toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </motion.div>
                        {message.sender === 'user' && (
                          <div className="w-8 h-8 rounded-full bg-amber-600 p-1.5 flex-shrink-0">
                            <UserIcon className="h-full w-full text-white" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Indicador de escritura */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-700 to-amber-900 p-1.5">
                          <ChatBubbleLeftIcon className="h-full w-full text-white" />
                        </div>
                        <div className="bg-white border border-amber-100 rounded-2xl p-4 shadow-md">
                          <div className="flex gap-1">
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                              }}
                              className="w-2 h-2 bg-amber-600 rounded-full"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 0.2
                              }}
                              className="w-2 h-2 bg-amber-600 rounded-full"
                            />
                            <motion.div
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.5, 1]
                              }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 0.4
                              }}
                              className="w-2 h-2 bg-amber-600 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Mensaje de error */}
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex justify-center"
                      >
                        <div className="bg-red-50 border border-red-100 px-4 py-2 rounded-full">
                          <p className="text-sm text-red-600 flex items-center gap-2">
                            <span>⚠️</span>
                            {error}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Formulario de entrada */}
                <div className="p-4 bg-white border-t border-amber-100">
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Escribe tu mensaje aquí..."
                      className="flex-1 px-4 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 text-sm placeholder:text-amber-300"
                      disabled={isLoading}
                    />
                    <motion.button
                      type="submit"
                      disabled={isLoading || !inputMessage.trim()}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2.5 bg-gradient-to-br from-amber-700 to-amber-900 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    >
                      <PaperAirplaneIcon className="h-5 w-5" />
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </>
  );
}