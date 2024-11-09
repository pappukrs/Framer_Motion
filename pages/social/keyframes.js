import { motion } from 'framer-motion';

export default function KeyFrames() {
  return (
    <motion.div
      animate={{
        x: [0, 100, 0, -100, 0], // moves to 100px, then 0, then -100, then back to 0
        y: [0, -100, 0, 100, 0], // moves up and down
      }}
      transition={{
        duration: 4,
        repeat: Infinity, // Repeat the animation infinitely
        ease: 'easeInOut', // Smooth easing
      }}
    >
      <h1>Keyframes Animation</h1>
    </motion.div>
  );
}
