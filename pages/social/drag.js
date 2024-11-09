import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100 }}
      whileDrag={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      style={{ width: 100, height: 100, backgroundColor: 'blue' }}
    >
      <h1>Drag Me!</h1>
    </motion.div>
  );
}
