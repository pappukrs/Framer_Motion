import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      whileTap={{ scale: 0.8 }}
      transition={{ duration: 0.1 }}
    >
      <h1>Tap Me!</h1>
    </motion.div>
  );
}
