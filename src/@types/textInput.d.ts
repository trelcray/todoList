import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps {
  children: ReactNode;
  className?: string;
}

export interface TextInputIconProps {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
  }
