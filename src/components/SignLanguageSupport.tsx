
import React from 'react';
import { cn } from '@/lib/utils';
import SignLanguageLoading from './signLanguage/SignLanguageLoading';
import SignLanguageEmpty from './signLanguage/SignLanguageEmpty';
import SignLanguageContent from './signLanguage/SignLanguageContent';
import { SignLanguageSupportProps } from './signLanguage/types';

const SignLanguageSupport: React.FC<SignLanguageSupportProps> = ({ 
  content, 
  isGenerating,
  className 
}) => {
  // Display appropriate component based on state
  if (isGenerating) {
    return <SignLanguageLoading className={className} />;
  }

  if (!content) {
    return <SignLanguageEmpty 
      className={className} 
      accessibilityText="No sign language content available. You can use the chat to request videos with captions or ask for sign language interpretation." 
    />;
  }

  return <SignLanguageContent content={content} className={className} />;
};

export default SignLanguageSupport;
