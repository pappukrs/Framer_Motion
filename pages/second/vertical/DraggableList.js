// components/DraggableList.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
`;

const ListItem = styled(motion.div)`
  width: 100%;
  height: 80px;
  background-color: #ffa41b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
  cursor: grab;
`;

const DraggableList = () => {
  return (
    <ListContainer>
      {[1, 2, 3, 4, 5].map((item) => (
        <ListItem
          key={item}
          drag="y"
          dragConstraints={{ top: -50, bottom: 50 }}
          whileDrag={{ scale: 1.05 }}
        >
          Item {item}
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default DraggableList;
