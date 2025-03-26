
import React from 'react';

interface MicrophoneButtonProps {
  isListening: boolean;
  disabled: boolean;
  onClick: () => void;
}

const MicrophoneButton: React.FC<MicrophoneButtonProps> = ({
  isListening,
  disabled,
  onClick
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${
        disabled 
          ? 'bg-gray-400 cursor-not-allowed' 
          : isListening 
            ? 'bg-red-500 text-white animate-pulse' 
            : 'bg-primary text-white hover:bg-primary/90'
      }`}
      aria-label={isListening ? 'Stop listening' : 'Start listening'}
      aria-pressed={isListening}
      aria-describedby="voice-status"
      title={isListening ? 'Stop listening' : 'Start speaking'}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
        <line x1="12" y1="19" x2="12" y2="22"/>
      </svg>
      <span className="sr-only">{isListening ? 'Stop listening' : 'Start speech recognition'}</span>
    </button>
  );
};

export default MicrophoneButton;
