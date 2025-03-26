
import React from 'react';
import { cn } from '@/lib/utils';
import { ContentItem } from '@/components/ContentDisplay';

type VideoContentProps = {
  content: ContentItem;
  showSubtitles: boolean;
  className?: string;
};

const VideoContent: React.FC<VideoContentProps> = ({ 
  content, 
  showSubtitles = true, // Default to true for deaf users
  className 
}) => {
  return (
    <div className={cn("mb-6 rounded-lg overflow-hidden shadow-lg", className)}>
      <div className="relative aspect-video">
        <iframe 
          src={`${content.url}${content.url.includes('?') ? '&' : '?'}cc_load_policy=1&cc_lang_pref=en`}
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title={content.title}
        ></iframe>
        {showSubtitles && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center">
            Sample subtitle text would appear here when available
          </div>
        )}
      </div>
      <div className="p-3 bg-muted/30">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Captions are enabled by default. YouTube's automatic captions may not be perfect.
        </p>
      </div>
    </div>
  );
};

export default VideoContent;
