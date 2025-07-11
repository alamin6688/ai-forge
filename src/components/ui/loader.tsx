
import React from 'react';
import { JellyTriangle } from 'ldrs/react';

// Import the CSS for the loader
import 'ldrs/react/JellyTriangle.css';

interface LoaderProps {
  size?: string;
  speed?: string;
  color?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "30",
  speed = "1.75",
  color = "hsl(var(--primary))",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <JellyTriangle
        size={size}
        speed={speed}
        color={color}
      />
    </div>
  );
};

export default Loader;
