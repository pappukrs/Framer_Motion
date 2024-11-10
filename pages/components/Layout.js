// components/Layout.js
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
};

const Layout = ({ children }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default Layout;
