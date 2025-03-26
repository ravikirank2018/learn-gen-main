
import React from 'react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { AccessibilityControlProps } from '@/components/content/types';

const ToggleControl: React.FC<AccessibilityControlProps> = ({ 
  label, 
  enabled, 
  onChange,
  className 
}) => {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <label className="text-sm">{label}</label>
      <Switch 
        checked={enabled}
        onCheckedChange={onChange}
      />
    </div>
  );
};

export default ToggleControl;
