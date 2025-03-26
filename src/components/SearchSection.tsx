
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type SearchSectionProps = {
  onSearch: (query: string, level: string, format: string) => void;
  isSearching: boolean;
  className?: string;
};

const SearchSection: React.FC<SearchSectionProps> = ({ 
  onSearch, 
  isSearching,
  className 
}) => {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('intermediate');
  const [format, setFormat] = useState('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query, level, format);
    }
  };

  return (
    <section className={cn("py-16 px-4", className)}>
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-slide-down">
          <h2 className="text-3xl font-bold mb-3">What would you like to learn today?</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Search for content or let our AI generate it for you
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="glass p-6 rounded-xl shadow-lg animate-fade-in">
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter a topic or question..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Difficulty Level
              </label>
              <select
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Content Format
              </label>
              <select
                className="w-full px-4 py-2 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                value={format}
                onChange={(e) => setFormat(e.target.value)}
              >
                <option value="all">All Formats</option>
                <option value="text">Text</option>
                <option value="video">Video</option>
                <option value="audio">Audio</option>
              </select>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSearching || !query.trim()}
              className={cn(
                "px-8 py-3 rounded-lg font-medium transition-all shadow-lg",
                "bg-primary text-white hover:bg-primary/90",
                "disabled:opacity-70 disabled:cursor-not-allowed",
                "hover:shadow-xl hover:shadow-primary/20"
              )}
            >
              {isSearching ? (
                <div className="flex items-center">
                  <div className="loading-dots">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  <span className="ml-2">Searching...</span>
                </div>
              ) : (
                <span>Search</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SearchSection;
