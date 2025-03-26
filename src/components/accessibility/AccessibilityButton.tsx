
import React from 'react';
import { cn } from '@/lib/utils';

type AccessibilityButtonProps = {
  onClick: () => void;
  className?: string;
};

const AccessibilityButton: React.FC<AccessibilityButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn("w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors", className)}
      aria-label="Accessibility options"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="text-gray-700 dark:text-gray-300"
      >
        <circle cx="12" cy="12" r="10"/>
        <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>
      </svg>
    </button>
  );
};

export default AccessibilityButton;
