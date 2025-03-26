
export type AccessibilityOptions = {
  textToSpeech: boolean;
  highContrast: boolean;
  subtitles: boolean;
  signLanguage: boolean;
  textSize: 'normal' | 'large' | 'x-large';
};

export type AccessibilityControlProps = {
  label: string;
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  className?: string;
};

export type TextSizeOption = 'normal' | 'large' | 'x-large';
