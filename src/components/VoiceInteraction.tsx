
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useBlindUserSupport } from '@/hooks/useBlindUserSupport';
import MicrophoneButton from './voice/MicrophoneButton';
import KeyboardShortcuts from './voice/KeyboardShortcuts';

type VoiceInteractionProps = {
  onSubmit: (query: string, level: string, format: string) => void;
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
  className?: string;
  disabled?: boolean;
};

const VoiceInteraction: React.FC<VoiceInteractionProps> = ({
  onSubmit,
  isListening,
  setIsListening,
  className,
  disabled = false
}) => {
  const [autoRestart, setAutoRestart] = useState(true);
  const [selectedLevel, setSelectedLevel] = useState('beginner');
  const [selectedFormat, setSelectedFormat] = useState('text');
  
  const { isBlindMode, announceToScreenReader } = useBlindUserSupport();
  
  const { 
    transcript, 
    setTranscript, 
    toggleListening, 
    isSpeechRecognitionSupported 
  } = useSpeechRecognition({
    isListening,
    setIsListening,
    autoRestart,
    disabled
  });

  const handleSubmit = () => {
    if (transcript.trim()) {
      // Try to detect level from transcript
      let detectedLevel = selectedLevel;
      if (transcript.toLowerCase().includes('beginner')) {
        detectedLevel = 'beginner';
      } else if (transcript.toLowerCase().includes('intermediate')) {
        detectedLevel = 'intermediate';
      } else if (transcript.toLowerCase().includes('advanced')) {
        detectedLevel = 'advanced';
      }
      
      // Try to detect format from transcript
      let detectedFormat = selectedFormat;
      if (transcript.toLowerCase().includes('video')) {
        detectedFormat = 'video';
      } else if (transcript.toLowerCase().includes('audio')) {
        detectedFormat = 'audio';
      } else if (transcript.toLowerCase().includes('sign') || 
                 transcript.toLowerCase().includes('language')) {
        detectedFormat = 'signLanguage';
      }
      
      // For blind users, default to audio format if not specified
      if (isBlindMode && detectedFormat === 'text') {
        detectedFormat = 'audio';
      }
      
      onSubmit(transcript, detectedLevel, detectedFormat);
      setTranscript('');
      
      // Announcement for blind users
      if (isBlindMode) {
        announceToScreenReader("Search submitted. Processing your request.");
      } else {
        toast.success('Query submitted!');
      }
    } else {
      if (isBlindMode) {
        announceToScreenReader("Please say something first before submitting.");
      } else {
        toast.error('Please say something first');
      }
    }
  };

  return (
    <div className={className}>
      <div className="glass p-6 rounded-xl shadow-lg border border-white/20">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold mb-2" id="voice-interaction-title">Voice Interaction</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300" aria-live="polite" id="voice-status">
            {disabled 
              ? 'Please wait while the system is speaking...' 
              : isListening 
                ? 'Listening... Speak now!' 
                : 'Click the microphone to start speaking'}
          </p>
        </div>
        
        <div className="flex justify-center mb-4">
          {isSpeechRecognitionSupported() ? (
            <MicrophoneButton
              isListening={isListening}
              disabled={disabled}
              onClick={toggleListening}
            />
          ) : (
            <div className="text-center p-4 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-700 dark:text-red-300" role="alert">
              Speech recognition is not supported in your browser.
            </div>
          )}
        </div>
        
        <div 
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 min-h-[100px] mb-4" 
          aria-live="polite" 
          aria-atomic="true"
        >
          {transcript ? transcript : 'Your spoken words will appear here...'}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300" id="difficulty-label">
              Difficulty Level
            </label>
            <select
              className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              aria-labelledby="difficulty-label"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300" id="format-label">
              Content Format
            </label>
            <select
              className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              aria-labelledby="format-label"
            >
              <option value="text">Text</option>
              <option value="video">Video</option>
              <option value="audio">Audio {isBlindMode && '(Recommended)'}</option>
              <option value="signLanguage">Sign Language</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button
            onClick={handleSubmit}
            disabled={!transcript.trim() || !isSpeechRecognitionSupported() || disabled}
            className="px-6 py-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Voice Query
          </Button>
        </div>
        
        <KeyboardShortcuts
          isBlindMode={isBlindMode}
          isListening={isListening}
          disabled={disabled}
          transcript={transcript}
          toggleListening={toggleListening}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default VoiceInteraction;
