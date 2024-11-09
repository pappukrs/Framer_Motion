import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Tap or Hover Me!</h1>
    </motion.div>
  );
}
