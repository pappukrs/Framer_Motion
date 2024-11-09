// components/FoodSlider.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import FoodCard from "./FoodCard";

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px;
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 20px;
  cursor: grab;
`;

const FoodSlider = ({ items }) => {
  return (
    <SliderContainer>
      <SliderTrack drag="x" dragConstraints={{ right: 0, left: -600 }}>
        {items.map((item, index) => (
          <FoodCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default FoodSlider;
