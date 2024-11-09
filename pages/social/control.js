import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      x: 0,
      transition: { duration: 2 },
    });
  }, [controls]);

  return (
    <motion.div animate={controls} initial={{ opacity: 0, x: -100 }}>
      <h1>Controlled Animation</h1>
    </motion.div>
  );
}
