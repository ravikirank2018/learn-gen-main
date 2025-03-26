// Simulate speech-to-text processing
export const processVoiceInput = async (
  audioBlob: Blob
): Promise<string> => {
  // In a real implementation, this would send the audio to a speech-to-text API
  console.log('Processing voice input...');
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Return mock result
  return "What is machine learning and how does it work?";
};

// Text-to-speech conversion
export const synthesizeSpeech = async (
  text: string,
  voiceIndex = 0 // default voice index
): Promise<boolean> => {
  console.log('Synthesizing speech:', text);
  
  return new Promise((resolve, reject) => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Get available voices
      let voices = window.speechSynthesis.getVoices();
      
      // Chrome sometimes needs a workaround for voices array
      if (voices.length === 0) {
        // Set a timeout to wait for voices to be loaded
        setTimeout(() => {
          voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            configureAndSpeak();
          } else {
            // If still no voices, try with default voice
            window.speechSynthesis.speak(utterance);
            resolve(true);
          }
        }, 200);
        
        // Also set up the onvoiceschanged event as a backup
        window.speechSynthesis.onvoiceschanged = () => {
          voices = window.speechSynthesis.getVoices();
          if (voices.length > 0) {
            configureAndSpeak();
          }
        };
      } else {
        // Voices are already loaded, proceed directly
        configureAndSpeak();
      }
      
      function configureAndSpeak() {
        // Select a voice (preferring English voices)
        const englishVoices = voices.filter(voice => 
          voice.lang.includes('en-')
        );
        
        if (englishVoices.length > 0) {
          utterance.voice = englishVoices[voiceIndex % englishVoices.length];
        } else if (voices.length > 0) {
          utterance.voice = voices[voiceIndex % voices.length];
        }
        
        // Set other properties
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
        
        // Handle events
        utterance.onend = () => {
          console.log('Speech synthesis completed successfully');
          resolve(true);
        };
        
        utterance.onerror = (event) => {
          console.error('Speech synthesis error:', event);
          
          // Try again with a simpler approach as fallback
          try {
            window.speechSynthesis.cancel();
            const fallbackUtterance = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(fallbackUtterance);
            console.log('Using fallback speech synthesis');
            resolve(true);
          } catch (e) {
            console.error('Fallback speech synthesis failed:', e);
            reject('Speech synthesis failed');
          }
        };
        
        // Add a safety timeout to resolve the promise
        // in case the onend event doesn't fire
        const safetyTimeout = setTimeout(() => {
          console.log('Safety timeout triggered for speech synthesis');
          resolve(true);
        }, text.length * 50 + 3000); // Estimate based on text length + buffer
        
        // Speak
        window.speechSynthesis.speak(utterance);
        
        // Chrome sometimes pauses speech synthesis when in background
        // This keeps it running
        if (window.navigator.userAgent.includes('Chrome')) {
          const speechUtterChars = text.length;
          const estimatedDuration = speechUtterChars * 50 + 3000;
          
          // Keep speech synthesis active in Chrome
          const intervalId = setInterval(() => {
            if (!window.speechSynthesis.speaking) {
              clearInterval(intervalId);
              clearTimeout(safetyTimeout);
            } else {
              window.speechSynthesis.pause();
              window.speechSynthesis.resume();
            }
          }, 10000);
          
          // Clear interval after estimated duration
          setTimeout(() => {
            clearInterval(intervalId);
          }, estimatedDuration);
        }
      }
    } else {
      console.error('Speech synthesis not supported');
      reject('Speech synthesis not supported');
    }
  });
};
