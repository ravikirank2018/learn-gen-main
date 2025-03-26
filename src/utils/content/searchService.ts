
import { ContentItem } from '@/components/ContentDisplay';
import { mockExternalContent } from './mockData';
import { generateTextContent } from './contentHelpers';

// Import the Google Custom Search API service
import { searchWithGoogleAPI } from './googleSearchService';

// Function to search web for content using Google Custom Search API
export const searchWebForContent = async (
  query: string,
  level: string,
  format: string
): Promise<ContentItem | null> => {
  console.log(`Searching web for: ${query}, Level: ${level}, Format: ${format}`);
  
  try {
    // First try to search using Google Custom Search API
    const googleResult = await searchWithGoogleAPI(query, level, format);
    if (googleResult) {
      return googleResult;
    }
    
    // If Google API fails or returns no results, fall back to the mock data
    console.log('Google API returned no results, falling back to mock data');
    
    // Clean the query to handle typos and normalize input
    let normalizedQuery = query.toLowerCase().trim();
    
    // Handle common typos in "data structures"
    if (normalizedQuery.includes("data str") || 
        normalizedQuery.includes("data strc") || 
        normalizedQuery.includes("data struct")) {
      normalizedQuery = "data structures";
    }
    
    // Format the title properly
    const titleWords = normalizedQuery.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create base content item
    const result: ContentItem = {
      id: `web-${Date.now()}`,
      title: titleWords,
      description: `Web search results for "${normalizedQuery}" at ${level} level`,
      source: 'external',
      format: format as 'text' | 'video' | 'audio',
    };
    
    // Match content based on query topic
    if (normalizedQuery.includes("data structure")) {
      if (format === 'video') {
        result.url = 'https://www.youtube.com/embed/RBSGKlAvoiM'; // Data structures video
        result.thumbnailUrl = 'https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg';
      } else if (format === 'text') {
        result.content = generateTextContent("data structures", level);
      }
    } else if (normalizedQuery.includes("machine learning")) {
      if (format === 'video') {
        result.url = 'https://www.youtube.com/embed/ukzFI9rgwfU'; // Machine learning video
        result.thumbnailUrl = 'https://img.youtube.com/vi/ukzFI9rgwfU/maxresdefault.jpg';
      } else if (format === 'text') {
        result.content = generateTextContent("machine learning", level);
      }
    } else if (normalizedQuery.includes("quantum")) {
      if (format === 'video') {
        result.url = 'https://www.youtube.com/embed/JhHMJCUmq28'; // Quantum video
        result.thumbnailUrl = 'https://img.youtube.com/vi/JhHMJCUmq28/maxresdefault.jpg';
      } else if (format === 'text') {
        result.content = generateTextContent("quantum computing", level);
      }
    } else {
      // For any other topic, generate generic content
      if (format === 'text') {
        result.content = generateTextContent(normalizedQuery, level);
      } else if (format === 'video') {
        // Use a general educational video for other topics
        result.url = 'https://www.youtube.com/embed/fKgMxDbV5Do'; // General educational video
        result.thumbnailUrl = 'https://img.youtube.com/vi/fKgMxDbV5Do/maxresdefault.jpg';
      }
    }
    
    return result;
  } catch (error) {
    console.error('Error searching web for content:', error);
    return null;
  }
};

// Improved search content function that better matches queries
export const searchContent = async (
  query: string, 
  level: string, 
  format: string
): Promise<ContentItem | null> => {
  console.log(`Searching for: ${query}, Level: ${level}, Format: ${format}`);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Normalize the query to handle common typos and variations
  const normalizedQuery = query.toLowerCase().trim();
  
  // Create a more comprehensive keyword matching system
  const keywordMap: Record<string, string[]> = {
    'data structure': ['e4', 'e5'],
    'data structur': ['e4', 'e5'],
    'data structures': ['e4', 'e5'],
    'machine learning': ['e1'],
    'ml': ['e1'],
    'artificial intelligence': ['e1'],
    'quantum': ['e2'],
    'quantum computing': ['e2'],
    'rome': ['e3'],
    'ancient rome': ['e3'],
    'history': ['e3']
  };
  
  // Try to find the best match for the query
  let matchedContent = null;
  let bestMatchScore = 0;
  
  // Check for exact matches first
  for (const [keyword, ids] of Object.entries(keywordMap)) {
    if (normalizedQuery.includes(keyword)) {
      const matchScore = keyword.length / normalizedQuery.length; // Simple relevance score
      
      if (matchScore > bestMatchScore) {
        // Find content items matching the format
        for (const id of ids) {
          const item = mockExternalContent.find(item => item.id === id);
          if (item && (format === 'all' || format === item.format)) {
            matchedContent = item;
            bestMatchScore = matchScore;
            break;
          }
        }
      }
    }
  }
  
  // If we have a match, return it
  if (matchedContent) {
    return matchedContent;
  }
  
  // Check for partial matches if no exact match was found
  for (const [keyword, ids] of Object.entries(keywordMap)) {
    // Split the keyword into words and check if any match
    const keywordWords = keyword.split(' ');
    for (const word of keywordWords) {
      if (word.length > 3 && normalizedQuery.includes(word)) {
        // Find content items matching the format
        for (const id of ids) {
          const item = mockExternalContent.find(item => item.id === id);
          if (item && (format === 'all' || format === item.format)) {
            return item;
          }
        }
      }
    }
  }
  
  // If no match found, return null to trigger web search
  return null;
};
