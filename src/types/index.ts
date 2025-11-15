import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
}

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    district: string;
    region: string;
    country: string;
  }
}