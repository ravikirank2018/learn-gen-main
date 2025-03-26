
import React from 'react';
import { cn } from '@/lib/utils';

type SignLanguageEmptyProps = {
  className?: string;
  accessibilityText?: string;
};

const SignLanguageEmpty: React.FC<SignLanguageEmptyProps> = ({ 
  className,
  accessibilityText = "No sign language content available." 
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center p-8 text-center glass rounded-xl h-full min-h-[300px]", className)}>
      <div className="w-16 h-16 mb-4 opacity-30">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m10 2 4 4-4 4" />
          <path d="M14 22v-4h-4v4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">No Sign Language Content</h3>
      <p className="text-gray-600 dark:text-gray-300 max-w-[300px]" aria-live="polite">
        {accessibilityText}
      </p>
      <div className="mt-6">
        <p className="text-sm font-medium text-primary">
          Try these options:
        </p>
        <ul className="text-sm mt-2 space-y-1 text-gray-600 dark:text-gray-300">
          <li>• Use the chat to ask for videos with captions</li>
          <li>• Search for educational content with "video" format</li>
          <li>• Request sign language interpretation for text content</li>
        </ul>
      </div>
    </div>
  );
};

export default SignLanguageEmpty;
