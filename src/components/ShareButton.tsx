import { Share2, Facebook, Twitter, MessageCircle, Copy, Mail, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { toast } from 'sonner';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonProps {
  title: string;
  description: string;
  url: string;
}

export default function ShareButton({ title, description, url }: ShareButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareOptions = [
    {
      name: 'Facebook',
      icon: Facebook,
      action: () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        toast.success('Compartiendo en Facebook');
      },
      color: 'text-[#1877F2] hover:bg-[#1877F2]/10'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      action: () => {
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title}\n\n${description}\n`)}&url=${encodeURIComponent(url)}`, '_blank');
        toast.success('Compartiendo en Twitter');
      },
      color: 'text-[#1DA1F2] hover:bg-[#1DA1F2]/10'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(`¡Mira esto!\n\n${title}\n${description}\n\n${url}`)}`, '_blank');
        toast.success('Compartiendo en WhatsApp');
      },
      color: 'text-[#25D366] hover:bg-[#25D366]/10'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      action: () => {
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`, '_blank');
        toast.success('Compartiendo en LinkedIn');
      },
      color: 'text-[#0A66C2] hover:bg-[#0A66C2]/10'
    },
    {
      name: 'Email',
      icon: Mail,
      action: () => {
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`${description}\n\n${url}`)}`;
        toast.success('Abriendo cliente de correo');
      },
      color: 'text-[#EA4335] hover:bg-[#EA4335]/10'
    },
    {
      name: 'Instagram Story',
      icon: Instagram,
      action: () => {
        // Nota: Instagram no tiene API directa para compartir, pero podemos copiar el link
        navigator.clipboard.writeText(url);
        toast.success('Link copiado para compartir en Instagram');
      },
      color: 'text-[#E4405F] hover:bg-[#E4405F]/10'
    },
    {
      name: 'Copiar Link',
      icon: Copy,
      action: () => {
        navigator.clipboard.writeText(url);
        toast.success('¡Link copiado al portapapeles!', {
          description: 'Ya puedes compartirlo donde quieras'
        });
      },
      color: 'text-[#2A1810] hover:bg-[#2A1810]/10'
    }
  ];

  return (
    <div className="relative">
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant="ghost"
          size="sm"
          className="text-[#8B7355] hover:text-[#2A1810] hover:bg-[#F5EDE4] transition-all duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Share2 className="w-4 h-4 mr-2" />
          </motion.div>
          <span className="text-sm">Compartir</span>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-2 min-w-[220px] z-50 border border-[#C49B66]/20"
            >
              <div className="grid gap-1">
                {shareOptions.map((option) => (
                  <button
                    key={option.name}
                    onClick={() => {
                      option.action();
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-2 w-full p-2 rounded transition-all duration-300 text-sm ${option.color}`}
                  >
                    <option.icon className="w-4 h-4" />
                    <span>{option.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}