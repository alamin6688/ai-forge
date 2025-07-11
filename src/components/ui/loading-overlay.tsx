
import React from 'react';
import { Loader } from './loader';

interface LoadingOverlayProps {
  isLoading: boolean;
  children: React.ReactNode;
  message?: string;
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  children,
  message = "Loading...",
  className = ""
}) => {
  return (
    <div className={`relative ${className}`}>
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center rounded-lg z-10">
          <div className="text-center space-y-2">
            <Loader size="40" speed="1.75" />
            <p className="text-sm text-muted-foreground font-medium">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingOverlay;
