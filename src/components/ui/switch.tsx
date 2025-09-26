"use client";

import * as React from 'react';
import { cn } from '@/lib/utils';

export type SwitchProps = {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
  ariaLabel?: string;
};

// Simple Switch sin dependencias externas, accesible con role="switch"
export function Switch({ checked, onCheckedChange, disabled, className, ariaLabel }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={() => onCheckedChange(!checked)}
      className={cn(
        'relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full border transition-colors duration-200',
        checked ? 'bg-primary-500 border-primary-500' : 'bg-gray-200 border-gray-300',
        disabled ? 'opacity-50 cursor-not-allowed' : 'hover:brightness-95',
        className
      )}
    >
      <span
        className={cn(
          'inline-block size-4 translate-x-1 rounded-full bg-white shadow transition-transform',
          checked ? 'translate-x-6' : 'translate-x-1'
        )}
      />
    </button>
  );
}