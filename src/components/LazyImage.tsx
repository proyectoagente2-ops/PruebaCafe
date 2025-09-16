'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function LazyImage({ src, alt, className = '', priority = false, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const isInView = useInView(imageRef, { once: true, margin: "50px 0px" });
  
  useEffect(() => {
    if (isInView && imageRef.current) {
      const img = imageRef.current;
      if (img.complete) {
        setIsLoaded(true);
      }
    }
  }, [isInView]);

  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={isLoaded ? { opacity: 1, filter: 'blur(0px)' } : {}}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      <img
        ref={imageRef}
        src={priority ? src : (isInView ? src : '')}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${!isLoaded && !priority ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </motion.div>
  );
}