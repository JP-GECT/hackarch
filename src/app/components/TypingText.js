"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingText = ({ text }) => {
  const [visibleText, setVisibleText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      setVisibleText((prevText) => prevText + text[currentIndex]);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Set a typing speed of 100ms per character

    return () => {
      clearInterval(typingInterval);
    };
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <p>{visibleText}</p>
    </motion.div>
  );
};

export default TypingText;
