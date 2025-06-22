import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AnimatedTitle = ({ title, containerClass, wordAnimation = true }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing animations on the words to prevent conflicts on re-render
    gsap.killTweensOf(containerRef.current.querySelectorAll('.word'));

    const words = containerRef.current.querySelectorAll('.word');

    gsap.fromTo(
      words,
      {
        y: 50, // Start 50px down
        opacity: 0, // Start invisible
      },
      {
        y: 0, // Animate to original position
        opacity: 1, // Animate to visible
        stagger: 0.1, // Stagger the animation of each word by 0.1 seconds
        duration: 0.8, // Duration of each word's animation
        ease: 'power3.out', // Easing function
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%', // When the top of the container hits 80% down the viewport
          end: 'bottom 20%', // When the bottom of the container hits 20% up the viewport
          scrub: true, // THIS IS THE KEY! Links animation progress directly to scroll position
          // markers: true, // Uncomment for debugging ScrollTrigger start/end points
        },
      }
    );

  }, [title, wordAnimation]); // Rerun effect if title or animation type changes

  // Function to render text, splitting into words
  const renderText = () => {
    // Ensuring the word spans are set up correctly for animation
    return title.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} className="word inline-block overflow-hidden mr-2">
        {word}
        {/* Add a non-breaking space if it's not the last word to preserve spacing */}
        {wordIndex < title.split(' ').length - 1 ? '\u00A0' : ''}
      </span>
    ));
  };

  return (
    <h1 ref={containerRef} className={`text-4xl font-bold ${containerClass}`}>
      {renderText()}
    </h1>
  );
};

export default AnimatedTitle;