
import React from 'react';
import { cn } from '@/lib/utils';
import { AccessibilityOptions } from '@/components/content/types';
import ToggleControl from './ToggleControl';
import TextSizeSelector from './TextSizeSelector';

type AccessibilityMenuProps = {
  options: AccessibilityOptions;
  onChange: (key: keyof AccessibilityOptions, value: any) => void;
  onClose: () => void;
  className?: string;
};

const AccessibilityMenu: React.FC<AccessibilityMenuProps> = ({ 
  options, 
  onChange, 
  onClose,
  className 
}) => {
  return (
    <div className={cn("glass p-5 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 w-72 animate-fade-in", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Accessibility Options</h3>
        <button 
          onClick={onClose} 
          aria-label="Close accessibility menu"
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
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
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
      </div>
      
      <div className="space-y-4">
        <ToggleControl 
          label="Text to Speech" 
          enabled={options.textToSpeech}
          onChange={(enabled) => onChange('textToSpeech', enabled)}
        />
        
        <ToggleControl 
          label="High Contrast" 
          enabled={options.highContrast}
          onChange={(enabled) => onChange('highContrast', enabled)}
        />
        
        <ToggleControl 
          label="Subtitles" 
          enabled={options.subtitles}
          onChange={(enabled) => onChange('subtitles', enabled)}
        />
        
        <ToggleControl 
          label="Sign Language" 
          enabled={options.signLanguage}
          onChange={(enabled) => onChange('signLanguage', enabled)}
        />
        
        <TextSizeSelector 
          value={options.textSize}
          onChange={(value) => onChange('textSize', value)}
        />
      </div>
    </div>
  );
};

export default AccessibilityMenu;
