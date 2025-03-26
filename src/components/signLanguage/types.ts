
export type SignLanguageState = 'loading' | 'empty' | 'filled';

export type SignLanguageSupportProps = {
  content: string | null;
  isGenerating: boolean;
  className?: string;
};
