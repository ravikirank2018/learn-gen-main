
import { ContentItem } from '@/components/ContentDisplay';

// Mock data for demonstration purposes
export const mockExternalContent: ContentItem[] = [
  {
    id: 'e1',
    title: 'Introduction to Machine Learning',
    description: 'Learn the fundamentals of machine learning algorithms and their applications.',
    source: 'external',
    format: 'text',
    content: 'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Machine learning is an important component of the growing field of data science.',
  },
  {
    id: 'e2',
    title: 'Understanding Quantum Computing',
    description: 'Explore the principles of quantum mechanics and how they apply to computing.',
    source: 'external',
    format: 'video',
    url: 'https://www.youtube.com/embed/JhHMJCUmq28',
    thumbnailUrl: 'https://img.youtube.com/vi/JhHMJCUmq28/maxresdefault.jpg',
  },
  {
    id: 'e3',
    title: 'The History of Ancient Rome',
    description: 'A comprehensive overview of the Roman civilization and its impact on the modern world.',
    source: 'external',
    format: 'audio',
    url: 'https://example.com/audio/ancient-rome.mp3',
  },
  {
    id: 'e4',
    title: 'Introduction to Data Structures',
    description: 'Learn about arrays, linked lists, stacks, queues, trees, and graphs.',
    source: 'external',
    format: 'video',
    url: 'https://www.youtube.com/embed/RBSGKlAvoiM',
    thumbnailUrl: 'https://img.youtube.com/vi/RBSGKlAvoiM/maxresdefault.jpg',
  },
  {
    id: 'e5',
    title: 'Data Structures Fundamentals',
    description: 'Learn about arrays, linked lists, stacks, queues, trees, and graphs.',
    source: 'external',
    format: 'text',
    content: 'Data structures are specialized formats for organizing, processing, retrieving and storing data. They provide a way to manage large amounts of data efficiently for uses such as large databases and internet indexing services. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.',
  }
];

export const mockAIContent: ContentItem[] = [
  {
    id: 'a1',
    title: 'Machine Learning Algorithms Explained',
    description: 'An AI-generated explanation of common machine learning algorithms for beginners.',
    source: 'ai',
    format: 'text',
    content: 'Machine learning algorithms can be broadly categorized into supervised learning, unsupervised learning, and reinforcement learning. Supervised learning algorithms learn from labeled data, making predictions based on known examples. Common algorithms include linear regression, logistic regression, decision trees, and neural networks.',
  },
  {
    id: 'a2',
    title: 'Quantum Computing Basics',
    description: 'AI-generated video explaining quantum computing fundamentals.',
    source: 'ai',
    format: 'video',
    url: 'https://example.com/ai-videos/quantum-computing.mp4',
    thumbnailUrl: 'https://example.com/thumbnails/quantum-computing.jpg',
  }
];
