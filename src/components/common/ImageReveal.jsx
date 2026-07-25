import React from 'react';
import { motion } from 'framer-motion';

export const ImageReveal = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
      className={`overflow-hidden bg-bg-accent-section transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
