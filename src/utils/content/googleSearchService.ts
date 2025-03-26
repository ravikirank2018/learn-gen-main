import { ContentItem } from '@/components/ContentDisplay';
import { generateTextContent } from './contentHelpers';

// Google Custom Search API configuration
const API_KEY = '1'; // The API key provided by the user
const SEARCH_ENGINE_ID = 'e28609fef16cb4ad9'; // The search engine ID provided by the user

/**
 * Searches for content using Google Custom Search API
 * @param query The search query
 * @param level The difficulty level (beginner, intermediate, advanced)
 * @param format The content format (text, video, audio, all)
 * @returns A ContentItem or null if no results found
 */
export const searchWithGoogleAPI = async (
  query: string,
  level: string,
  format: string
): Promise<ContentItem | null> => {
  console.log(`Searching Google API for: ${query}, Level: ${level}, Format: ${format}`);
  
  try {
    // Construct the search query with level and format preferences
    let searchQuery = query;
    if (level !== 'all') {
      searchQuery += ` ${level} level`;
    }
    
    // Format the URL for the Google Custom Search API
    const url = new URL('https://www.googleapis.com/customsearch/v1');
    url.searchParams.append('key', API_KEY);
    url.searchParams.append('cx', SEARCH_ENGINE_ID);
    url.searchParams.append('q', searchQuery);
    
    // Add format-specific parameters if needed
    if (format === 'video') {
      url.searchParams.append('searchType', 'video');
    } else if (format === 'image') {
      url.searchParams.append('searchType', 'image');
    }
    
    // Make the API request
    const response = await fetch(url.toString());
    
    if (!response.ok) {
      throw new Error(`Google API error: ${response.status} ${response.statusText}`);
    }
    
    const data = await response.json();
    
    // Check if we have search results
    if (!data.items || data.items.length === 0) {
      console.log('No search results found');
      return null;
    }
    
    // Get the first result
    const firstResult = data.items[0];
    
    // Format the title properly
    const titleWords = query.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create content item based on the search result
    const result: ContentItem = {
      id: `google-${Date.now()}`,
      title: firstResult.title || titleWords,
      description: firstResult.snippet || `Search results for "${query}" at ${level} level`,
      source: 'external',
      format: format as 'text' | 'video' | 'audio',
    };
    
    // Handle different content formats
    if (format === 'video') {
      // Try to extract YouTube video ID if available
      const videoId = extractYouTubeVideoId(firstResult.link);
      if (videoId) {
        result.url = `https://www.youtube.com/embed/${videoId}`;
        result.thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      } else {
        result.url = firstResult.link;
        result.thumbnailUrl = firstResult.pagemap?.cse_image?.[0]?.src || '';
      }
    } else if (format === 'text') {
      // For text content, we can either use the snippet or generate content
      if (firstResult.snippet) {
        result.content = firstResult.snippet;
        // Add link to the original content
        result.content += `\n\nRead more at: ${firstResult.link}`;
      } else {
        result.content = generateTextContent(query, level);
      }
      result.url = firstResult.link;
    } else if (format === 'audio') {
      result.url = firstResult.link;
    }
    
    return result;
  } catch (error) {
    console.error('Error searching with Google API:', error);
    return null;
  }
};

/**
 * Helper function to extract YouTube video ID from a URL
 * @param url The URL that might contain a YouTube video
 * @returns The YouTube video ID or null if not found
 */
function extractYouTubeVideoId(url: string): string | null {
  if (!url) return null;
  
  // Regular expressions for different YouTube URL formats
  const regexps = [
    /youtube\.com\/watch\?v=([^&]+)/,
    /youtube\.com\/embed\/([^?]+)/,
    /youtube\.com\/v\/([^?]+)/,
    /youtu\.be\/([^?]+)/
  ];
  
  for (const regex of regexps) {
    const match = url.match(regex);
    if (match) {
      return match[1];
    }
  }
  
  return null;
}