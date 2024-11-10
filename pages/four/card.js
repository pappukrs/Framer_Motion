// components/AnimatedCard.js
import { motion } from "framer-motion";

const cardVariants = {
  initial: { scale: 1, opacity: 1 },
  hover: { scale: 1.1, opacity: 0.9 },
  tap: { scale: 0.95, opacity: 1 }
};

const AnimatedCard = ({ title, description, imageUrl }) => (
  <motion.div
    className="card"
    variants={cardVariants}
    initial="initial"
    whileHover="hover"
    whileTap="tap"
  >
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
  </motion.div>
);

export default AnimatedCard;
