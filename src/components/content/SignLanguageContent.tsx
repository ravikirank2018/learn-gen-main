
import React from 'react';
import { cn } from '@/lib/utils';
import { ContentItem } from '@/components/ContentDisplay';

type SignLanguageContentProps = {
  content: ContentItem;
  className?: string;
};

const SignLanguageContent: React.FC<SignLanguageContentProps> = ({ content, className }) => {
  return (
    <div className={cn("mb-6 rounded-lg overflow-hidden shadow-lg", className)}>
      <div className="relative aspect-video bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-white text-center p-4">
            This is where the sign language video would play.
            <br />In a production environment, this would be an actual video of sign language.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignLanguageContent;
