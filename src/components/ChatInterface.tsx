
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type ChatInterfaceProps = {
  onSubmit: (message: string) => void;
  isProcessing: boolean;
  className?: string;
  placeholder?: string;
};

const ChatInterface: React.FC<ChatInterfaceProps> = ({
  onSubmit,
  isProcessing,
  className,
  placeholder = "Type your message here..."
}) => {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your educational assistant. I can help find YouTube videos with captions or answer your questions. What would you like to learn about today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() || isProcessing) return;
    
    // Add user message to chat
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    
    // Call the onSubmit prop with the message
    onSubmit(inputValue);
    
    // Clear input field
    setInputValue('');
  };

  // Add bot response to chat
  const addBotResponse = (content: string) => {
    const newBotMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'bot',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, newBotMessage]);
  };

  // Auto scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update messages when new content is received
  useEffect(() => {
    // This will be triggered when a response is received 
    // and handled by the parent component
  }, []);

  return (
    <div className={cn("flex flex-col h-full glass rounded-xl overflow-hidden", className)}>
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold">Chat Assistant</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ask questions or request videos with captions
        </p>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={cn(
              "max-w-[80%] rounded-lg p-3",
              message.sender === 'user' 
                ? "bg-primary text-primary-foreground ml-auto" 
                : "bg-muted text-muted-foreground"
            )}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
        
        {isProcessing && (
          <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[80%] flex items-center space-x-2">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.2s]" />
            <div className="w-2 h-2 bg-current rounded-full animate-bounce [animation-delay:0.4s]" />
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder={placeholder}
            className="resize-none min-h-[60px]"
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <Button 
            type="submit" 
            disabled={isProcessing || !inputValue.trim()}
            className="self-end"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
