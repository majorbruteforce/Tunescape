// @ts-nocheck
"use client"
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const ScrollFadeIn = ({ children  }) => {
  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;

      const elementTop = element.offsetTop;
      const elementHeight = element.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      const isVisible = scrollY > elementTop - windowHeight + elementHeight / 2;

      if (isVisible) {
        element.classList.add('visible');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger the initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="scroll-fade-in"
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
