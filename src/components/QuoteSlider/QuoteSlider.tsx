import React, { useState, useEffect, useCallback } from "react";
import { QuoteCard } from "../QuoteCard";
import { useWindowWidth } from "../../breakpoints";

interface Quote {
  text: string;
  image: string;
  name: string;
  handle: string;
}

interface Props {
  className?: string;
}

export const QuoteSlider = ({ className }: Props): JSX.Element => {
  const screenWidth = useWindowWidth();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const quotes: Quote[] = [
    {
      text: "The insights we get are next-level, we make decisions twice as fast, with more confidence.",
      image: "https://c.animaapp.com/mophdx97y3wpG4/img/image-4@2x.png",
      name: "Miguel Fernandez",
      handle: "@MiguelFdezDev"
    },
    {
      text: "Our workflows are finally smooth and automated. The AI assistant is like having an extra pair of hands.",
      image: screenWidth < 1036 
        ? "https://c.animaapp.com/mophdx97y3wpG4/img/image-4@2x.png"
        : "https://c.animaapp.com/mophdx97y3wpG4/img/image-6@2x.png",
      name: "Alex Rodriguez",
      handle: "@AlexRodDev"
    },
    {
      text: "We reduced project delays by 40% since switching to FlowTrack. Our remote teams finally feel aligned.",
      image: "https://c.animaapp.com/mophdx97y3wpG4/img/image-2@2x.png",
      name: "Emma Thompson",
      handle: "@EmmaThompsonPM"
    },
    {
      text: "The collaboration features are game-changing. We ship features 3x faster now.",
      image: "https://c.animaapp.com/mophdx97y3wpG4/img/image-6@2x.png",
      name: "David Kim",
      handle: "@DavidKimTech"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  }, [quotes.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + quotes.length) % quotes.length);
  }, [quotes.length]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  // Get visible quotes based on screen size
  const getVisibleQuotes = () => {
    if (screenWidth >= 1036) {
      // Desktop: show 3 quotes
      const visibleQuotes = [];
      for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % quotes.length;
        visibleQuotes.push({ ...quotes[index], index });
      }
      return visibleQuotes;
    } else {
      // Mobile: show 1 quote
      return [{ ...quotes[currentIndex], index: currentIndex }];
    }
  };

  const visibleQuotes = getVisibleQuotes();

  return (
    <div className={`w-full flex flex-col items-center gap-[var(--spacing-spacing-xl)] flex-[0_0_auto] relative ${className}`}>
      {/* Quotes Container */}
      <div 
        className={`relative overflow-hidden ${screenWidth < 1036 ? "w-full" : "w-[860px]"}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            screenWidth < 1036 
              ? "w-full justify-center" 
              : "gap-[var(--spacing-spacing-lg)]"
          }`}
          style={{
            transform: screenWidth < 1036 
              ? `translateX(-${currentIndex * 100}%)` 
              : 'translateX(0)'
          }}
        >
          {screenWidth < 1036 ? (
            // Mobile: Single quote slider
            quotes.map((quote, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex justify-center px-6"
              >
                <QuoteCard
                  className="!w-full !max-w-[340px] !h-[200px]"
                  text={quote.text}
                  image={quote.image}
                />
              </div>
            ))
          ) : (
            // Desktop: Three quotes visible
            visibleQuotes.map((quote, displayIndex) => (
              <QuoteCard
                key={`${quote.index}-${displayIndex}`}
                className={`flex-shrink-0 !h-[200px] ${
                  displayIndex === 0 ? "!ml-[-96.00px]" : 
                  displayIndex === 2 ? "!mr-[-96.00px]" : ""
                }`}
                text={quote.text}
                image={quote.image}
              />
            ))
          )}
        </div>

        {/* Gradient Overlays for Desktop */}
        {screenWidth >= 1036 && (
          <>
            <div className="bg-[linear-gradient(270deg,rgba(247,247,247,1)_0%,rgba(247,247,247,0)_100%)] w-[200px] right-0 top-0 h-full absolute pointer-events-none" />
            <div className="bg-[linear-gradient(270deg,rgba(247,247,247,1)_0%,rgba(247,247,247,0)_100%)] w-[200px] left-0 top-0 rotate-[-180.00deg] h-full absolute pointer-events-none" />
          </>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="inline-flex items-start gap-6 flex-[0_0_auto] relative">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="border border-solid border-color-dark-250 inline-flex items-center gap-2.5 flex-[0_0_auto] p-2 rounded-2xl bg-color-light-1000 relative hover:border-color-dark-500 transition-colors duration-200 group"
          aria-label="Previous quote"
        >
          <div className="w-6 h-6 relative">
            <img
              className="w-2 left-2 top-[5px] h-3.5 absolute transition-transform duration-200 group-hover:scale-110"
              alt="Previous"
              src={
                screenWidth < 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-13.svg"
                  : "https://c.animaapp.com/mophdx97y3wpG4/img/icon-25.svg"
              }
            />
          </div>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="border border-solid border-color-dark-250 inline-flex items-center gap-2.5 flex-[0_0_auto] p-2 rounded-2xl bg-color-light-1000 relative hover:border-color-dark-500 transition-colors duration-200 group"
          aria-label="Next quote"
        >
          <div className="w-6 h-6 relative">
            <img
              className="w-2 left-2 top-[5px] h-3.5 absolute transition-transform duration-200 group-hover:scale-110"
              alt="Next"
              src={
                screenWidth < 1036
                  ? "https://c.animaapp.com/mophdx97y3wpG4/img/icon-14.svg"
                  : "https://c.animaapp.com/mophdx97y3wpG4/img/icon-26.svg"
              }
            />
          </div>
        </button>
      </div>

    </div>
  );
};
