// components/DraggableSlider.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

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

const SliderCard = styled(motion.div)`
  width: 200px;
  height: 150px;
  background-color: #4b9cd3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

const DraggableSlider = () => {
  return (
    <SliderContainer>
      <SliderTrack
        drag="x"
        dragConstraints={{ right: 0, left: -500 }}
      >
        {[1, 2, 3, 4, 5].map((item) => (
          <SliderCard key={item}>
            Card {item}
          </SliderCard>
        ))}
      </SliderTrack>
    </SliderContainer>
  );
};

export default DraggableSlider;
