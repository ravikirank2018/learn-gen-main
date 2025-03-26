
import { ContentItem } from '@/components/ContentDisplay';
import { mockAIContent } from './mockData';

// Generate AI content
export const generateContent = async (
  prompt: string, 
  format: string
): Promise<ContentItem> => {
  console.log(`Generating content for: ${prompt}, Format: ${format}`);
  
  // Simulate AI generation delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Return a random mock AI content
  const content = { ...mockAIContent[Math.floor(Math.random() * mockAIContent.length)] };
  
  // Customize the content based on the prompt
  content.title = `${prompt} (AI Generated)`;
  content.description = `AI-generated ${format} content about ${prompt}`;
  
  return content;
};
