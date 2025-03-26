
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import AccessibilityControls from './AccessibilityControls';
import { synthesizeSpeech } from '@/utils/content';
import ContentLoading from './content/ContentLoading';
import ContentError from './content/ContentError';
import ContentEmpty from './content/ContentEmpty';
import VideoContent from './content/VideoContent';
import AudioContent from './content/AudioContent';
import ContentBadges from './content/ContentBadges';
import TextContent from './content/TextContent';
import { AccessibilityOptions } from './content/types';

export type ContentItem = {
  id: string;
  title: string;
  description: string;
  source: 'external' | 'ai';
  format: 'text' | 'video' | 'audio';
  url?: string;
  content?: string;
  thumbnailUrl?: string;
};

type ContentDisplayProps = {
  content: ContentItem | null;
  isLoading: boolean;
  error: string | null;
  className?: string;
  speakText?: (text: string) => Promise<void>;
};

const ContentDisplay: React.FC<ContentDisplayProps> = ({ 
  content, 
  isLoading, 
  error,
  className,
  speakText 
}) => {
  const [accessibilityOptions, setAccessibilityOptions] = React.useState<AccessibilityOptions>({
    textToSpeech: true, // Enable by default for blind users
    highContrast: false,
    subtitles: true,
    signLanguage: false, // Add this missing property
    textSize: 'normal' as 'normal' | 'large' | 'x-large', // Add explicit type assertion here
  });

  const textSizeClass = React.useMemo(() => {
    switch (accessibilityOptions.textSize) {
      case 'large': return 'text-lg';
      case 'x-large': return 'text-xl';
      default: return 'text-base';
    }
  }, [accessibilityOptions.textSize]);

  const readContent = async () => {
    if (content?.content) {
      if (speakText) {
        await speakText(content.content);
      } else {
        try {
          await synthesizeSpeech(content.content);
        } catch (err) {
          console.error('Error reading content:', err);
        }
      }
    }
  };

  useEffect(() => {
    if (content?.content && accessibilityOptions.textToSpeech) {
      readContent();
    }
  }, [content, accessibilityOptions.textToSpeech]);

  useEffect(() => {
    if (error && accessibilityOptions.textToSpeech) {
      if (speakText) {
        speakText(error);
      } else {
        synthesizeSpeech(error).catch(err => 
          console.error('Error speaking error message:', err)
        );
      }
    }
  }, [error, accessibilityOptions.textToSpeech]);

  if (isLoading) {
    return <ContentLoading className={className} />;
  }

  if (error) {
    return <ContentError error={error} onRetry={readContent} className={className} />;
  }

  if (!content) {
    return <ContentEmpty className={className} />;
  }

  return (
    <div className={cn("relative", className)}>
      <div className="absolute top-4 right-4 z-10">
        <AccessibilityControls 
          onChange={setAccessibilityOptions} 
          initialOptions={accessibilityOptions}
        />
      </div>

      <div 
        className={cn(
          "glass p-8 rounded-xl shadow-lg animate-fade-in",
          accessibilityOptions.highContrast && "bg-white dark:bg-black"
        )}
      >
        <ContentBadges content={content} />

        {content.format === 'video' && content.url && (
          <VideoContent 
            content={content} 
            showSubtitles={accessibilityOptions.subtitles}
          />
        )}

        {content.format === 'audio' && content.url && (
          <AudioContent content={content} />
        )}
        
        <TextContent 
          content={content}
          textSizeClass={textSizeClass}
          highContrast={accessibilityOptions.highContrast}
          onReadContent={readContent}
        />
      </div>
    </div>
  );
};

export default ContentDisplay;
