
import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';

interface UseSpeechRecognitionProps {
  isListening: boolean;
  setIsListening: (isListening: boolean) => void;
  autoRestart: boolean;
  disabled?: boolean;
}

interface UseSpeechRecognitionReturn {
  transcript: string;
  setTranscript: (transcript: string) => void;
  toggleListening: () => void;
  isSpeechRecognitionSupported: () => boolean;
}

export const useSpeechRecognition = ({
  isListening,
  setIsListening,
  autoRestart,
  disabled = false
}: UseSpeechRecognitionProps): UseSpeechRecognitionReturn => {
  const [transcript, setTranscript] = useState('');
  const recognition = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<number | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognition.current = new SpeechRecognition();
      recognition.current.continuous = true;
      recognition.current.interimResults = true;
      recognition.current.lang = 'en-US';
      
      recognition.current.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript;
          } else {
            interimTranscript += transcript;
          }
        }

        // If we have a final transcript, use that, otherwise use the interim
        const currentTranscript = finalTranscript || interimTranscript;
        setTranscript(currentTranscript);
        
        // Reset timeout if we're getting speech
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      };

      recognition.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error', event.error);
        
        // Show user-friendly error messages
        if (event.error === 'no-speech') {
          toast.warning("I didn't hear anything. Please try speaking again.");
        } else if (event.error === 'audio-capture') {
          toast.error("Can't access your microphone. Please check your browser permissions.");
        } else if (event.error === 'not-allowed') {
          toast.error("Microphone access is blocked. Please allow microphone access in your browser settings.");
        } else {
          toast.error(`Speech recognition error: ${event.error}`);
        }
        
        setIsListening(false);
      };

      recognition.current.onend = () => {
        if (isListening && recognition.current && autoRestart) {
          try {
            recognition.current.start();
          } catch (e) {
            console.log('Recognition already started or other error', e);
          }
        } else {
          setIsListening(false);
        }
      };
      
      recognition.current.onspeechend = () => {
        // If speech ends, wait a moment then stop listening if no new speech is detected
        if (timeoutRef.current) {
          window.clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = window.setTimeout(() => {
          if (recognition.current && isListening) {
            try {
              recognition.current.stop();
              toast.info("Speech completed. Click to start listening again.");
              setIsListening(false);
            } catch (e) {
              console.log('Error stopping recognition', e);
            }
          }
        }, 2000);
      };
    } else {
      toast.error('Speech recognition is not supported in this browser');
    }
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      
      if (recognition.current) {
        recognition.current.onresult = null;
        recognition.current.onerror = null;
        recognition.current.onend = null;
        recognition.current.onspeechend = null;
        try {
          recognition.current.stop();
        } catch (e) {
          console.log('Recognition already stopped');
        }
      }
      
      window.speechSynthesis && window.speechSynthesis.cancel();
    };
  }, [isListening, autoRestart, setIsListening]);

  // Start/stop recognition based on isListening state
  useEffect(() => {
    if (isListening && recognition.current && !disabled) {
      try {
        recognition.current.start();
        toast.info('Listening... Speak now!', {
          duration: 3000,
        });
      } catch (e) {
        console.log('Recognition already started or error', e);
      }
    } else if ((!isListening || disabled) && recognition.current) {
      try {
        recognition.current.stop();
      } catch (e) {
        console.log('Recognition already stopped or error', e);
      }
    }
  }, [isListening, disabled, setIsListening]);

  // If disabled prop changes to true while listening, stop listening
  useEffect(() => {
    if (disabled && isListening) {
      setIsListening(false);
    }
  }, [disabled, isListening, setIsListening]);

  const toggleListening = () => {
    if (disabled) {
      toast.info("Please wait until the current speech finishes");
      return;
    }
    
    setIsListening(!isListening);
  };

  const isSpeechRecognitionSupported = () => {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  };

  return {
    transcript,
    setTranscript,
    toggleListening,
    isSpeechRecognitionSupported
  };
};
