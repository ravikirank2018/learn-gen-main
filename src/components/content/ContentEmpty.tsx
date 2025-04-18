
import React from 'react';
import { cn } from '@/lib/utils';

type ContentEmptyProps = {
  className?: string;
};

const ContentEmpty: React.FC<ContentEmptyProps> = ({ className }) => {
  return (
    <div className={cn("animate-fade-in", className)}>
      <div className="glass p-8 rounded-xl shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-4">
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
            className="text-gray-400"
          >
            <path d="M17.5 5.5C19 7 20.5 9 21 11c-2.5.5-5 .5-8.5-1"/>
            <path d="M5.5 17.5C7 19 9 20.5 11 21c.5-2.5.5-5-1-8.5"/>
            <path d="M16.5 11.5c1 2 1 3.5 1 6-2.5 0-4 0-6-1"/>
            <path d="M20 11.5c1 1.5 2 3.5 2 4.5-1.5.5-3 0-4.5-.5"/>
            <path d="M11.5 20c1.5 1 3.5 2 4.5 2 .5-1.5 0-3-.5-4.5"/>
            <path d="M20.5 16.5c1 2 1.5 3.5 1.5 5.5-2 0-3.5-.5-5.5-1.5"/>
            <path d="M4.783 4.782C8.493 1.072 14.5 1 18 5c-1 1-4.5 2-6.5 1.5 1 1.5 1 4 .5 5.5-1.5.5-4 .5-5.5-.5C7 13.5 6 17 5 18c-4-3.5-3.927-9.508-.217-13.218Z"/>
            <path d="M4.5 4.5 3 3"/>
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-2">No Content Yet</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Search for a topic to retrieve or generate content
        </p>
      </div>
    </div>
  );
};

export default ContentEmpty;
