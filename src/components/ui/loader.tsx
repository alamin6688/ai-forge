
import React from 'react';
import { Quantum } from 'ldrs/react';

// Import the CSS for the loader
import 'ldrs/quantum';

interface LoaderProps {
  size?: string;
  speed?: string;
  color?: string;
  className?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "45",
  speed = "1.75",
  color = "hsl(var(--primary))",
  className = ""
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Quantum
        size={size}
        speed={speed}
        color={color}
      />
    </div>
  );
};

export default Loader;
