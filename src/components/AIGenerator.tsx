
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type AIGeneratorProps = {
  onGenerate: (prompt: string, format: string) => void;
  isGenerating: boolean;
  className?: string;
};

const AIGenerator: React.FC<AIGeneratorProps> = ({ 
  onGenerate, 
  isGenerating,
  className 
}) => {
  const [prompt, setPrompt] = useState('');
  const [format, setFormat] = useState('text');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      onGenerate(prompt, format);
    }
  };

  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="container max-w-4xl mx-auto">
        <div className="glass p-8 rounded-xl shadow-lg border border-white/20 animate-fade-in">
          <div className="text-center mb-8">
            <div className="inline-block bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium mb-4">
              AI Content Generation
            </div>
            <h2 className="text-2xl font-bold mb-3">No suitable content found?</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our AI can generate custom educational content based on your requirements
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                What would you like to learn about?
              </label>
              <textarea
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[100px]"
                placeholder="Describe what you'd like the AI to explain or teach..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Desired Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <button
                  type="button"
                  className={cn(
                    "p-4 rounded-lg border transition-all text-center",
                    format === 'text' 
                      ? "border-primary/50 bg-primary/5 text-primary" 
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5"
                  )}
                  onClick={() => setFormat('text')}
                >
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
                      <path d="M17 21h-7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/>
                      <path d="M9 17h6"/>
                      <path d="M9 13h6"/>
                    </svg>
                    <span className="font-medium">Text</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  className={cn(
                    "p-4 rounded-lg border transition-all text-center",
                    format === 'video' 
                      ? "border-primary/50 bg-primary/5 text-primary" 
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5"
                  )}
                  onClick={() => setFormat('video')}
                >
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="m22 8-6 4 6 4V8Z"/>
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2"/>
                    </svg>
                    <span className="font-medium">Video</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  className={cn(
                    "p-4 rounded-lg border transition-all text-center",
                    format === 'audio' 
                      ? "border-primary/50 bg-primary/5 text-primary" 
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5"
                  )}
                  onClick={() => setFormat('audio')}
                >
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="M12 6v12"/>
                      <path d="M6 12h12"/>
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    <span className="font-medium">Audio</span>
                  </div>
                </button>
                
                <button
                  type="button"
                  className={cn(
                    "p-4 rounded-lg border transition-all text-center",
                    format === 'signLanguage' 
                      ? "border-primary/50 bg-primary/5 text-primary" 
                      : "border-gray-200 dark:border-gray-700 hover:border-primary/30 hover:bg-primary/5"
                  )}
                  onClick={() => setFormat('signLanguage')}
                >
                  <div className="flex flex-col items-center">
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
                      className="mb-2"
                    >
                      <path d="M7 11V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7l-3-3z"/>
                      <path d="M18 10V4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v6l-3-3"/>
                      <rect x="5" y="14" width="5" height="6" rx="1"/>
                      <rect x="13" y="14" width="5" height="6" rx="1"/>
                    </svg>
                    <span className="font-medium">Sign Language</span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isGenerating || !prompt.trim()}
                className={cn(
                  "px-8 py-3 rounded-lg font-medium transition-all shadow-lg",
                  "bg-purple-600 text-white hover:bg-purple-700",
                  "disabled:opacity-70 disabled:cursor-not-allowed",
                  "hover:shadow-xl hover:shadow-purple-600/20"
                )}
              >
                {isGenerating ? (
                  <div className="flex items-center">
                    <div className="loading-dots">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span className="ml-2">Generating...</span>
                  </div>
                ) : (
                  <span>Generate with AI</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AIGenerator;
