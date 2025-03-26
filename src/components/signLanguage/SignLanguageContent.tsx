
import React from 'react';
import { cn } from '@/lib/utils';

type SignLanguageContentProps = {
  content: string;
  className?: string;
};

const SignLanguageContent: React.FC<SignLanguageContentProps> = ({ content, className }) => {
  return (
    <div className={cn("glass p-6 rounded-xl shadow-lg", className)}>
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold">Sign Language Interpretation</h3>
      </div>
      <div className="bg-black aspect-video rounded-lg overflow-hidden">
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-4">
          <div className="text-center text-white">
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
              className="mx-auto mb-4"
            >
              <path d="M12 8V4H8"/>
              <rect width="16" height="12" x="4" y="8" rx="2"/>
              <path d="M2 14h2"/>
              <path d="M20 14h2"/>
              <path d="M15 13v2"/>
              <path d="M9 13v2"/>
            </svg>
            <p className="text-lg font-medium mb-2">
              Sign Language Avatar
            </p>
            <p className="text-sm opacity-80">
              This is where the AI-generated sign language interpretation would be displayed.
              <br />In a production environment, this would be a video of an AI avatar signing the content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageContent;
