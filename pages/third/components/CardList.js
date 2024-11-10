// components/CardList.js

import { motion } from 'framer-motion';

const cardContainerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CardList() {
  return (
    <motion.div
      className="card-container"
      variants={cardContainerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px"
      }}
    >
      {[1, 2, 3, 4, 5].map((card) => (
        <motion.div
          key={card}
          className="card"
          variants={cardVariants}
          style={{
            height: "150px",
            borderRadius: "10px",
            backgroundColor: "#3498db",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: "20px"
          }}
        >
          Card {card}
        </motion.div>
      ))}
    </motion.div>
  );
}
