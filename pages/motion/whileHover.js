import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 10 }}
      transition={{ duration: 0.3 }}
      
    >
      <h1>Hover Me!</h1>
    </motion.div>
  );
}
