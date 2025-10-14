import React from 'react';

interface ReadingTimeProps {
  text: string;
}

export default function ReadingTime({ text }: ReadingTimeProps) {
  const wordsPerMinute = 200; // Velocidad de lectura promedio en palabras por minuto
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);

  return (
    <div className="flex items-center space-x-1 text-xs text-[#8B7355]">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        className="w-4 h-4"
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
      <span>{minutes} min de lectura</span>
    </div>
  );
}