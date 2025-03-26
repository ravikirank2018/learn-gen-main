
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type ContentErrorProps = {
  error: string;
  onRetry: () => Promise<void>;
  className?: string;
};

const ContentError: React.FC<ContentErrorProps> = ({ error, onRetry, className }) => {
  return (
    <div className={cn("animate-fade-in", className)}>
      <div className="glass p-8 rounded-xl shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-red-500"
          >
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">Error</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
        <Button 
          onClick={() => onRetry()}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
};

export default ContentError;
