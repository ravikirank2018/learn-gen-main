
import React from 'react';
import { cn } from '@/lib/utils';
import { ContentItem } from '@/components/ContentDisplay';

type ContentBadgesProps = {
  content: ContentItem;
  className?: string;
};

const ContentBadges: React.FC<ContentBadgesProps> = ({ content, className }) => {
  return (
    <div className={cn("mb-6 flex items-center", className)}>
      <div className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center mr-3",
        content.source === 'external' 
          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" 
          : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
      )}>
        {content.source === 'external' ? (
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
          >
            <circle cx="12" cy="12" r="10"/>
            <path d="m8 12 3 3 5-5"/>
          </svg>
        ) : (
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
          >
            <path d="M12 8V4H8"/>
            <rect width="16" height="12" x="4" y="8" rx="2"/>
            <path d="M2 14h2"/>
            <path d="M20 14h2"/>
            <path d="M15 13v2"/>
            <path d="M9 13v2"/>
          </svg>
        )}
      </div>
      <div>
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full",
          content.source === 'external' 
            ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300" 
            : "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
        )}>
          {content.source === 'external' ? 'Retrieved Content' : 'AI Generated'}
        </span>
        <span className={cn(
          "text-xs font-medium px-2 py-1 rounded-full ml-2",
          content.format === 'text' 
            ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300" 
            : content.format === 'video'
            ? "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300"
            : content.format === 'audio'
            ? "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300"
            : "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
        )}>
          {content.format === 'text' 
            ? 'Text' 
            : content.format === 'video' 
            ? 'Video' 
            : content.format === 'audio' 
            ? 'Audio'
            : 'Sign Language'
          }
        </span>
      </div>
    </div>
  );
};

export default ContentBadges;
