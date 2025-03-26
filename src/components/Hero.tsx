
import React from 'react';
import { cn } from '@/lib/utils';

type HeroProps = {
  className?: string;
};

const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <section className={cn("py-24 px-4", className)}>
      <div className="container max-w-7xl mx-auto">
        <div className="text-center animate-slide-up">
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            AI-Powered Learning Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Learn <span className="text-primary relative inline-block">
              Adaptively
              <svg 
                className="absolute -bottom-2 left-0 w-full h-2 text-primary/30" 
                viewBox="0 0 100 20" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,10 Q25,5 50,10 T100,10" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="8"
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            An intelligent learning system that adapts to your needs, 
            retrieving the best educational content or generating 
            custom materials just for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button 
              className="px-6 py-3 text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl hover:shadow-primary/20 font-medium"
            >
              Get Started
            </button>
            <button 
              className="px-6 py-3 text-gray-700 dark:text-white bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
            >
              Learn More
            </button>
          </div>
        </div>
        
        <div className="mt-24 max-w-4xl mx-auto glass p-8 rounded-2xl shadow-xl border border-white/20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-4">
              <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
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
                  className="text-blue-600 dark:text-blue-400"
                >
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m16 10-4 4-4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Content</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Retrieves high-quality content from reliable sources
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="mb-4 bg-purple-100 dark:bg-purple-900/30 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
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
                  className="text-purple-600 dark:text-purple-400"
                >
                  <path d="M5.5 20H8M12 20h2.5M20 16.58V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v13.58c0 .97 1.18 1.46 1.87.83L8 15.27l6.13 2.13a1 1 0 0 0 1.3-.73l.5-1.7M3 3l18 18"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Generation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creates custom content when external sources aren't available
              </p>
            </div>
            
            <div className="text-center p-4">
              <div className="mb-4 bg-green-100 dark:bg-green-900/30 w-16 h-16 mx-auto rounded-2xl flex items-center justify-center">
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
                  className="text-green-600 dark:text-green-400"
                >
                  <circle cx="18" cy="5" r="3"/>
                  <circle cx="6" cy="12" r="3"/>
                  <circle cx="18" cy="19" r="3"/>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Accessible</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Designed for all users including those with visual or hearing impairments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
