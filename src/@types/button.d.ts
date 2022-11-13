import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButtonRootProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export interface IButtonIconProps {
  children: ReactNode;
  className?: string;
}

export interface IButtonButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}