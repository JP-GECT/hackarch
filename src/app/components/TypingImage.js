"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypingImage = ({ src, alt }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const typingTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000); // Set a delay of 1 second before showing the text

    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <div>
      <motion.img
        src={src}
        alt={alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      {showText && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>
      )}
    </div>
  );
};

export default TypingImage;
