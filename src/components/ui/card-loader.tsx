
import React from 'react';
import { Loader } from './loader';

interface CardLoaderProps {
  count?: number;
  className?: string;
}

export const CardLoader: React.FC<CardLoaderProps> = ({
  count = 3,
  className = ""
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="border border-border rounded-lg p-6 bg-card animate-pulse"
        >
          <div className="flex items-center justify-center h-32 mb-4">
            <Loader size="35" speed="1.5" />
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-3/4"></div>
            <div className="h-3 bg-muted rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardLoader;
