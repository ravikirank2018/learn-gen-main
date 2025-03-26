
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import SearchSection from '@/components/SearchSection';
import ContentDisplay from '@/components/ContentDisplay';
import AIGenerator from '@/components/AIGenerator';
import VoiceInteraction from '@/components/VoiceInteraction';
import ChatInterface from '@/components/ChatInterface';
import useContentSearch from '@/hooks/useContentSearch';

const Index = () => {
  const { 
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
  } = useContentSearch();

  const handleChatSubmit = (message: string) => {
    // Extract format preference, defaulting to video for better accessibility
    const format = localStorage.getItem('preferredFormat') || 'video';
    // Extract level from message or default to beginner
    const level = message.toLowerCase().includes('advanced') 
      ? 'advanced' 
      : message.toLowerCase().includes('intermediate') 
        ? 'intermediate' 
        : 'beginner';
    
    console.log(`Processing chat: "${message}", Format: ${format}, Level: ${level}`);
    
    // Call the search function
    handleSearch(message, level, format);
  };

  return (
    <Layout>
      <div className="sr-only" aria-live="polite">
        Educational content search application. Use voice controls or text chat to search for content.
        Press space key to start or stop voice recognition.
      </div>
      
      <Hero />
      
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <SearchSection 
              onSearch={handleSearch} 
              isSearching={isSearching} 
            />
            
            <div className="mt-8">
              <VoiceInteraction
                onSubmit={handleSearch}
                isListening={isListening}
                setIsListening={setIsListening}
                disabled={isSpeaking}
              />
            </div>
          </div>
          
          <div className="flex flex-col h-full">
            <ChatInterface 
              onSubmit={handleChatSubmit}
              isProcessing={isSearching || isGenerating}
              className="min-h-[400px]"
              placeholder="Ask for educational content or search for a topic..."
            />
          </div>
        </div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1">
          <ContentDisplay 
            content={content} 
            isLoading={isSearching || isGenerating} 
            error={error}
            speakText={speakText}
          />
        </div>
      </div>
      
      <AIGenerator 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating} 
      />
    </Layout>
  );
};

export default Index;
