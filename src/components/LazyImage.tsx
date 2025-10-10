'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function LazyImage({ src, alt, className = '', priority = false, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const imageRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (priority) {
      setCurrentSrc(src);
      return;
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setCurrentSrc(src);
          if (observerRef.current && imageRef.current) {
            observerRef.current.unobserve(imageRef.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    if (imageRef.current) {
      observerRef.current.observe(imageRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="relative w-full h-full"
    >
      <div className={`absolute inset-0 bg-gray-200 ${isLoaded ? 'opacity-0' : 'animate-pulse'} transition-opacity duration-300`} />
      <img
        ref={imageRef}
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        className={`${className} transition-opacity duration-300`}
        {...props}
      />
    </motion.div>
  );
}