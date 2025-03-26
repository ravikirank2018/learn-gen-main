
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AccessibilityOptions } from './content/types';
import AccessibilityButton from './accessibility/AccessibilityButton';
import AccessibilityMenu from './accessibility/AccessibilityMenu';

type AccessibilityControlsProps = {
  onChange: (options: AccessibilityOptions) => void;
  initialOptions?: AccessibilityOptions;
  className?: string;
};

const AccessibilityControls: React.FC<AccessibilityControlsProps> = ({ 
  onChange, 
  initialOptions,
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<AccessibilityOptions>(
    initialOptions || {
      textToSpeech: false,
      highContrast: false,
      subtitles: true,
      signLanguage: false,
      textSize: 'normal',
    }
  );

  const handleChange = (key: keyof AccessibilityOptions, value: any) => {
    const newOptions = { ...options, [key]: value };
    setOptions(newOptions);
    onChange(newOptions);
  };

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className={cn("relative", className)}>
      <AccessibilityButton onClick={toggleMenu} />
      
      {isOpen && (
        <div className="absolute bottom-16 right-0 z-50">
          <AccessibilityMenu 
            options={options} 
            onChange={handleChange} 
            onClose={closeMenu}
          />
        </div>
      )}
    </div>
  );
};

export default AccessibilityControls;
