import { useState } from 'react';
import { toast } from 'sonner';
import { ContentItem } from '@/components/ContentDisplay';
import { 
  searchContent, 
  generateContent, 
  synthesizeSpeech,
  searchWebForContent
} from '@/utils/content';

const useContentSearch = () => {
  const [content, setContent] = useState<ContentItem | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Helper function to handle speech synthesis
  const speakText = async (text: string) => {
    if (!text) return;
    
    setIsSpeaking(true);
    try {
      await synthesizeSpeech(text);
    } catch (err) {
      console.error('Error synthesizing speech:', err);
      // Try again with a simpler message
      try {
        await synthesizeSpeech("I'm sorry, there was an error with speech synthesis.");
      } catch (innerErr) {
        console.error('Fallback speech synthesis also failed:', innerErr);
      }
    } finally {
      setIsSpeaking(false);
    }
  };

  const handleSearch = async (query: string, level: string, format: string) => {
    setIsSearching(true);
    setError(null);
    
    // Debug the search query
    console.log(`Search initiated for: "${query}" at ${level} level, format: ${format}`);
    
    // Speak a confirmation message for blind users
    await speakText("Searching for content about " + query);
    
    try {
      // First try to search our internal database
      let result = await searchContent(query, level, format);
      
      // If no result, search the web
      if (!result) {
        await speakText("No content found in our database. Searching the web...");
        result = await searchWebForContent(query, level, format);
      }
      
      if (result) {
        console.log("Search result found:", result);
        setContent(result);
        toast.success('Content found!');
        
        // If format is text and we have content, synthesize speech for blind users
        if (result.format === 'text' && result.content) {
          await speakText(result.content);
        } else if (result.description) {
          // For non-text formats, at least speak the description
          await speakText("Found content: " + result.description);
        }
      } else {
        const errorMessage = 'No content found for your query. Try generating with AI instead.';
        setError(errorMessage);
        toast.error('No content found. Try AI generation instead.');
        
        // Synthesize error message for blind users
        await speakText(errorMessage);
      }
    } catch (err) {
      console.error("Search error:", err);
      const errorMessage = 'An error occurred while searching for content.';
      setError(errorMessage);
      toast.error('Error searching for content');
      
      // Synthesize error message for blind users
      await speakText(errorMessage);
    } finally {
      setIsSearching(false);
    }
  };

  const handleGenerate = async (prompt: string, format: string) => {
    setIsGenerating(true);
    setError(null);
    
    // Speak a confirmation message for blind users
    await speakText("Generating AI content about " + prompt);
    
    try {
      const result = await generateContent(prompt, format);
      setContent(result);
      toast.success('AI-generated content ready!');
      
      // If format is text and we have content, synthesize speech for blind users
      if (result.format === 'text' && result.content) {
        await speakText(result.content);
      } else if (result.description) {
        // For non-text formats, at least speak the description
        await speakText("Generated content: " + result.description);
      }
    } catch (err) {
      const errorMessage = 'An error occurred while generating content.';
      setError(errorMessage);
      toast.error('Error generating content');
      console.error(err);
      
      // Synthesize error message for blind users
      await speakText(errorMessage);
    } finally {
      setIsGenerating(false);
    }
  };

  return {
    content,
    error,
    isSearching,
    isGenerating,
    isListening,
    setIsListening,
    isSpeaking,
    handleSearch,
    handleGenerate,
    speakText
  };
};

export default useContentSearch;
