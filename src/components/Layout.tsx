
import React from 'react';
import { cn } from '@/lib/utils';

type LayoutProps = {
  children: React.ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 glass px-6 py-4 border-b border-gray-100 dark:border-gray-800">
        <div className="container max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-semibold">A</span>
            </div>
            <span className="font-semibold text-lg">Adaptive</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Features</a>
            <a href="#" className="text-sm font-medium hover:text-primary transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="User menu"
            >
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
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="10" r="3"/>
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main className={cn("flex-1", className)}>
        {children}
      </main>
      <footer className="glass border-t border-gray-100 dark:border-gray-800 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Adaptive</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                An AI-driven adaptive learning system focused on accessibility and personalization.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Content Retrieval</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">AI Generation</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Adaptive Learning. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
