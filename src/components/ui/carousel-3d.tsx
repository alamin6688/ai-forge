
"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CarouselCard {
  id: string;
  category: string;
  title: string;
  icon: React.ReactNode;
  preview: string;
  content: string;
  imageUrl: string;
}

interface Carousel3DProps {
  cards: CarouselCard[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  autoRotate?: boolean;
  autoRotateInterval?: number;
  pauseOnHover?: boolean;
  enableGlitchEffect?: boolean;
  enableGlowEffect?: boolean;
  showControls?: boolean;
  showThemeToggle?: boolean;
  dragSensitivity?: number;
  transitionDuration?: number;
  onCardClick?: (card: CarouselCard, index: number) => void;
  onCardFlip?: (card: CarouselCard, index: number, isFlipped: boolean) => void;
  onRotate?: (currentIndex: number) => void;
}

const Carousel3D: React.FC<Carousel3DProps> = ({
  cards,
  cardWidth = 300,
  cardHeight = 400,
  radius = 400,
  autoRotate = false,
  autoRotateInterval = 5000,
  pauseOnHover = true,
  enableGlitchEffect = false,
  enableGlowEffect = true,
  showControls = true,
  showThemeToggle = false,
  dragSensitivity = 0.2,
  transitionDuration = 0.5,
  onCardClick,
  onCardFlip,
  onRotate,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const autoRotateRef = useRef<NodeJS.Timeout>();

  // Auto rotation effect
  useEffect(() => {
    if (autoRotate && !isHovered && !isDragging) {
      autoRotateRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % cards.length);
      }, autoRotateInterval);
    } else {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    }

    return () => {
      if (autoRotateRef.current) {
        clearInterval(autoRotateRef.current);
      }
    };
  }, [autoRotate, isHovered, isDragging, autoRotateInterval, cards.length]);

  // Call onRotate callback when index changes
  useEffect(() => {
    onRotate?.(currentIndex);
  }, [currentIndex, onRotate]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  }, [cards.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  }, [cards.length]);

  const handleCardClick = useCallback((card: CarouselCard, index: number) => {
    onCardClick?.(card, index);
    
    // Flip card logic
    const newFlippedCards = new Set(flippedCards);
    const wasFlipped = flippedCards.has(index);
    
    if (wasFlipped) {
      newFlippedCards.delete(index);
    } else {
      newFlippedCards.add(index);
    }
    
    setFlippedCards(newFlippedCards);
    onCardFlip?.(card, index, !wasFlipped);
  }, [flippedCards, onCardClick, onCardFlip]);

  const getCardStyle = (index: number) => {
    const angle = (360 / cards.length) * (index - currentIndex);
    const radians = (angle * Math.PI) / 180;
    const x = Math.cos(radians) * radius;
    const z = Math.sin(radians) * radius;
    const isFlipped = flippedCards.has(index);

    return {
      transform: `translate3d(${x}px, 0, ${z}px) rotateY(${angle}deg) ${isFlipped ? 'rotateY(180deg)' : ''}`,
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      transition: `transform ${transitionDuration}s ease-in-out`,
      transformStyle: 'preserve-3d' as const,
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - dragStart.x;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
      setIsDragging(false);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
      {/* Theme Toggle */}
      {showThemeToggle && (
        <div className="absolute top-4 right-4 z-20">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
        </div>
      )}

      {/* 3D Carousel Container */}
      <div
        ref={containerRef}
        className="relative"
        style={{
          width: `${cardWidth + 100}px`,
          height: `${cardHeight + 100}px`,
          perspective: "1000px",
        }}
        onMouseEnter={() => pauseOnHover && setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "rotateX(-10deg)",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`absolute cursor-pointer group ${
                enableGlowEffect ? 'hover:drop-shadow-2xl' : ''
              } ${enableGlitchEffect ? 'hover:animate-pulse' : ''}`}
              style={getCardStyle(index)}
              onClick={() => handleCardClick(card, index)}
            >
              {/* Card Front */}
              <div className="w-full h-full absolute backface-hidden bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="relative h-1/2">
                  <img
                    src={card.imageUrl}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 text-white opacity-80">
                    {card.icon}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs text-white/80 uppercase tracking-wide mb-1">
                      {card.category}
                    </p>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 h-1/2 flex flex-col justify-between">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {card.preview}
                  </p>
                  <div className="text-xs text-blue-500 dark:text-blue-400 font-medium">
                    Click to read more →
                  </div>
                </div>
              </div>

              {/* Card Back */}
              <div className="w-full h-full absolute backface-hidden bg-primary/5 dark:bg-primary/10 rounded-lg shadow-xl overflow-hidden border border-primary/20 p-4 flex flex-col justify-between"
                style={{ transform: 'rotateY(180deg)' }}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-primary">{card.icon}</div>
                    <p className="text-xs text-primary uppercase tracking-wide">
                      {card.category}
                    </p>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {card.content}
                  </p>
                </div>
                <div className="text-xs text-primary font-medium mt-4">
                  Click to flip back ←
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      {showControls && (
        <div className="flex items-center gap-4 mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrev}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <div className="flex gap-2">
            {cards.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleNext}
            className="rounded-full w-10 h-10 p-0"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Carousel3D;
