
import React from 'react';
import { cn } from '@/lib/utils';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { TextSizeOption } from '@/components/content/types';

type TextSizeSelectorProps = {
  value: TextSizeOption;
  onChange: (value: TextSizeOption) => void;
  className?: string;
};

const TextSizeSelector: React.FC<TextSizeSelectorProps> = ({ value, onChange, className }) => {
  return (
    <div className={className}>
      <label className="text-sm block mb-2">Text Size</label>
      <ToggleGroup 
        type="single" 
        value={value} 
        onValueChange={(val) => val && onChange(val as TextSizeOption)}
        className="flex justify-between w-full gap-2"
      >
        <ToggleGroupItem value="normal" className="flex-1 text-center">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="large" className="flex-1 text-center">
          A+
        </ToggleGroupItem>
        <ToggleGroupItem value="x-large" className="flex-1 text-center">
          A++
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default TextSizeSelector;
