
import React from 'react';
import { cn } from '@/lib/utils';
import { ContentItem } from '@/components/ContentDisplay';

type AudioContentProps = {
  content: ContentItem;
  className?: string;
};

const AudioContent: React.FC<AudioContentProps> = ({ content, className }) => {
  return (
    <div className={cn("mb-6", className)}>
      <audio controls className="w-full">
        <source src={content.url} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioContent;
