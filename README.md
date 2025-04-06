# Adaptive Learning Platform

An AI-driven adaptive learning system focused on accessibility and personalization.

## Technology Stack

### Frontend
- React 18+ with TypeScript
- Vite for build tooling
- TailwindCSS for styling
- Radix UI for accessible components
- React Router for navigation
- TanStack Query for data fetching

### State Management & Data Flow
- React Query for server state
- React Hooks for local state
- Custom hooks for feature-specific logic

### Accessibility Features
- Voice Interaction (Speech Recognition)
- Screen Reader Support
- Keyboard Navigation
- High Contrast Modes
- Responsive Design

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── accessibility/ # Accessibility-specific components
│   └── content/       # Content-related components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── pages/             # Page components
└── utils/             # Helper functions
```

## Key Components

### Layout (`Layout.tsx`)
Main layout component providing consistent structure across pages with:
- Responsive header with navigation
- Main content area
- Footer with site information

### Content Search (`SearchSection.tsx`, `useContentSearch.ts`)
- Search functionality for educational content
- Format preference selection
- Difficulty level filtering

### AI Generator (`AIGenerator.tsx`)
- AI-powered content generation
- Customizable output formats
- Learning level adaptation

### Voice Interaction (`VoiceInteraction.tsx`)
- Speech recognition for hands-free interaction
- Voice commands processing
- Text-to-speech output

### Chat Interface (`ChatInterface.tsx`)
- Interactive chat UI
- Message history management
- Response formatting

## Setup Instructions

1. Clone the repository
```bash
git clone [repository-url]
cd learn-gen
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
VITE_APP_API_KEY=your_api_key
```

4. Start development server
```bash
npm run dev
```

## Development Guidelines

### Component Creation
- Use TypeScript for type safety
- Implement proper accessibility attributes
- Follow component composition patterns
- Include proper documentation

### Styling
- Use TailwindCSS utility classes
- Follow responsive design principles
- Maintain consistent theming
- Support dark mode

### Accessibility
- Implement ARIA labels
- Ensure keyboard navigation
- Support screen readers
- Test with accessibility tools

### State Management
- Use React Query for API data
- Implement proper error handling
- Maintain loading states
- Cache responses appropriately

## Build & Deployment

1. Build the application
```bash
npm run build
```

2. Preview production build
```bash
npm run preview
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue in the repository or contact the maintainers.
