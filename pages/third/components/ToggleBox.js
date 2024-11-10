// components/ToggleBox.js

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ToggleBox() {
  const [isToggled, setIsToggled] = useState(false);

  const toggleVariants = {
    open: { scale: 1.2, backgroundColor: "#e74c3c" },
    closed: { scale: 1, backgroundColor: "#3498db" }
  };

  return (
    <motion.div
      className="toggle-box"
      variants={toggleVariants}
      animate={isToggled ? "open" : "closed"}
      onClick={() => setIsToggled(!isToggled)}
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    />
  );
}
