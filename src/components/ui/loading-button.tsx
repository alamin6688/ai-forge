
import React from 'react';
import { Button } from './button';
import { Loader } from './loader';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  loadingText?: string;
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

export const LoadingButton: React.FC<LoadingButtonProps> = ({
  loading,
  loadingText = "Loading...",
  children,
  disabled,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <Button
      variant={variant}
      size={size}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <Loader size="16" speed="2" />
          <span>{loadingText}</span>
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default LoadingButton;
