import { motion } from 'framer-motion';

export default function variantExample() {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 2 }}
    >
      <h1>Variants Animation</h1>
    </motion.div>
  );
}
