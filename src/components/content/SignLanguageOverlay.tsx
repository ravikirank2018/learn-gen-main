
import React from 'react';
import { cn } from '@/lib/utils';

type SignLanguageOverlayProps = {
  className?: string;
};

const SignLanguageOverlay: React.FC<SignLanguageOverlayProps> = ({ className }) => {
  return (
    <div className={cn("mt-6 border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white/50 dark:bg-black/50", className)}>
      <div className="flex items-center mb-2">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="mr-2 text-primary"
        >
          <path d="M11 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
          <path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
          <path d="M11 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
          <path d="M7 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
          <path d="M7 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"/>
          <path d="M3 3a8 8 0 1 0 16 0 8 8 0 0 0-16 0z"/>
          <path d="M10.7 21A8 8 0 0 0 19 12.3"/>
          <path d="M5 12.3A8 8 0 0 0 10.3 3"/>
        </svg>
        <span className="font-medium">Sign Language</span>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 aspect-video rounded flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Sign language avatar would appear here
        </p>
      </div>
    </div>
  );
};

export default SignLanguageOverlay;
