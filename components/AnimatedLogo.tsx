
import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedLogo: React.FC<{ size?: number }> = ({ size = 40 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="initial"
      animate="animate"
      className="svg-shadow"
    >
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="4"
        variants={{
          animate: {
            rotate: 360,
            transition: { duration: 10, repeat: Infinity, ease: "linear" }
          }
        }}
      />
      <motion.path
        d="M30 50 H70 M50 30 V70"
        stroke="#3b82f6"
        strokeWidth="12"
        strokeLinecap="round"
        variants={{
          initial: { pathLength: 0, opacity: 0 },
          animate: { 
            pathLength: 1, 
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
          }
        }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="10"
        fill="#3b82f6"
        variants={{
          animate: {
            scale: [1, 1.2, 1],
            transition: { duration: 2, repeat: Infinity }
          }
        }}
      />
    </motion.svg>
  );
};
