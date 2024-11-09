// components/DraggableCard.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  width: 300px;
  height: 200px;
  background-color: #ff6f61;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5em;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  cursor: grab;
`;

const DraggableCard = () => {
  return (
    <Card
      drag
      dragConstraints={{ left: -100, right: 900, top: -50, bottom: 50 }}
      whileTap={{ scale: 0.9 }}
    >
      Drag Me!
    </Card>
  );
};

export default DraggableCard;
