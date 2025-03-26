
import React from 'react';
import { cn } from '@/lib/utils';
import { ContentItem } from '@/components/ContentDisplay';

type TextContentProps = {
  content: ContentItem;
  textSizeClass: string;
  highContrast: boolean;
  onReadContent: () => Promise<void>;
  className?: string;
};

const TextContent: React.FC<TextContentProps> = ({ 
  content, 
  textSizeClass, 
  highContrast, 
  onReadContent,
  className 
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={cn(
          "text-2xl font-bold",
          textSizeClass === 'text-lg' && "text-3xl",
          textSizeClass === 'text-xl' && "text-4xl",
          highContrast && "text-black dark:text-white"
        )}>
          {content.title}
        </h2>
        
        {content.content && (
          <button 
            onClick={onReadContent}
            className="p-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
            aria-label="Read content aloud"
            title="Read content aloud"
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
            >
              <path d="M12 6v12"/>
              <path d="M6 12h12"/>
              <circle cx="12" cy="12" r="10"/>
            </svg>
          </button>
        )}
      </div>
      
      <p className={cn(
        "text-gray-600 dark:text-gray-300 mb-6",
        textSizeClass,
        highContrast && "text-black dark:text-white"
      )}>
        {content.description}
      </p>

      {content.content && (
        <div className={cn("prose max-w-none", textSizeClass)}>
          <p className={highContrast ? "text-black dark:text-white" : ""}>
            {content.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default TextContent;
