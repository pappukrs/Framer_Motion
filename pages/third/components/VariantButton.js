// components/VariantButton.js

import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1, backgroundColor: "#3498db" },
  hover: { scale: 1.1, backgroundColor: "#2980b9" },
  tap: { scale: 0.9, backgroundColor: "#1c6695" }
};

export default function VariantButton() {
  return (
    <motion.button
      className="button"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      style={{
        padding: "10px 20px",
        color: "#fff",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Animated Button
    </motion.button>
  );
}
