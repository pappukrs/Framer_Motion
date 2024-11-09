// components/CategoryList.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

const CategoryItem = styled(motion.div)`
  width: 100%;
  padding: 15px;
  background-color: #ffae42;
  color: white;
  font-size: 1em;
  font-weight: bold;
  border-radius: 8px;
  text-align: center;
  cursor: grab;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
`;

const CategoryList = ({ categories }) => {
  return (
    <ListContainer>
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          drag="y"
          dragConstraints={{ top: -50, bottom: 50 }}
          whileDrag={{ scale: 1.05 }}
        >
          {category}
        </CategoryItem>
      ))}
    </ListContainer>
  );
};

export default CategoryList;
