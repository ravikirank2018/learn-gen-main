
import React, { useEffect } from 'react';

interface KeyboardShortcutsProps {
  isBlindMode: boolean;
  isListening: boolean;
  disabled: boolean;
  transcript: string;
  toggleListening: () => void;
  handleSubmit: () => void;
}

const KeyboardShortcuts: React.FC<KeyboardShortcutsProps> = ({
  isBlindMode,
  isListening,
  disabled,
  transcript,
  toggleListening,
  handleSubmit
}) => {
  // Add keyboard shortcuts for blind users
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Space key to toggle listening when not in an input field
      if (e.code === 'Space' && 
          !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName) &&
          !(e.target as HTMLElement)?.isContentEditable) {
        if (isBlindMode && !disabled) {
          e.preventDefault();
          toggleListening();
        }
      }
      // Enter key to submit when transcript is available
      else if (e.code === 'Enter' && 
               !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName) &&
               transcript.trim() && 
               isBlindMode && 
               !isListening && 
               !disabled) {
        e.preventDefault();
        handleSubmit();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [transcript, isListening, disabled, isBlindMode, toggleListening, handleSubmit]);

  if (!isBlindMode) return null;

  return (
    <div className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
      <p>Keyboard shortcuts: Space to toggle listening, Enter to submit</p>
    </div>
  );
};

export default KeyboardShortcuts;
