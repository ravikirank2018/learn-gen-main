
import React from 'react';
import { cn } from '@/lib/utils';

type SignLanguageLoadingProps = {
  className?: string;
};

const SignLanguageLoading: React.FC<SignLanguageLoadingProps> = ({ className }) => {
  return (
    <div className={cn("glass p-6 rounded-xl shadow-lg animate-pulse", className)}>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold">Generating Sign Language...</h3>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 aspect-video rounded-lg flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="48" 
          height="48" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-gray-400 animate-spin"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
        </svg>
      </div>
    </div>
  );
};

export default SignLanguageLoading;
