
import React from 'react';
import { Loader } from './loader';

interface PageLoaderProps {
  message?: string;
  fullScreen?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({
  message = "Loading...",
  fullScreen = true
}) => {
  const containerClasses = fullScreen 
    ? "fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center"
    : "flex items-center justify-center py-12";

  return (
    <div className={containerClasses}>
      <div className="text-center space-y-4">
        <Loader size="60" speed="1.5" />
        <p className="text-muted-foreground text-sm font-medium">{message}</p>
      </div>
    </div>
  );
};

export default PageLoader;
