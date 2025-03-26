
import { useState, useEffect } from 'react';

export const useBlindUserSupport = () => {
  const [isBlindMode, setIsBlindMode] = useState(false);

  // Check if user might be using a screen reader
  useEffect(() => {
    // Try to detect if user might be using a screen reader
    const possibleScreenReaderUser = 
      window.navigator.userAgent.includes('JAWS') || 
      window.navigator.userAgent.includes('NVDA') ||
      window.navigator.userAgent.includes('VoiceOver') ||
      document.querySelector('[role="application"][aria-roledescription="screen reader"]') !== null;
    
    if (possibleScreenReaderUser) {
      setIsBlindMode(true);
      // Auto announce the availability of voice search
      const message = "Voice search is available. Click the microphone button or press space to start speaking.";
      window.setTimeout(() => {
        // Use aria-live region to announce to screen readers
        const announcer = document.createElement('div');
        announcer.setAttribute('aria-live', 'assertive');
        announcer.setAttribute('class', 'sr-only');
        announcer.textContent = message;
        document.body.appendChild(announcer);
        
        // Remove after announcement
        setTimeout(() => {
          document.body.removeChild(announcer);
        }, 3000);
      }, 2000);
    }
  }, []);

  // Helper function to announce messages to screen reader users
  const announceToScreenReader = (message: string) => {
    if (!isBlindMode) return;
    
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'assertive');
    announcer.setAttribute('class', 'sr-only');
    announcer.textContent = message;
    document.body.appendChild(announcer);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcer);
    }, 1500);
  };

  return {
    isBlindMode,
    announceToScreenReader
  };
};
