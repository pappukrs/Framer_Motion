// components/Slider.js

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

const slides = [
  { id: 1, color: "#ffadad", text: "Slide 1" },
  { id: 2, color: "#ffd6a5", text: "Slide 2" },
  { id: 3, color: "#fdffb6", text: "Slide 3" },
  { id: 4, color: "#caffbf", text: "Slide 4" },
];

const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Slide = styled(motion.div)`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #333;
  border-radius: 15px;
  background-color: ${({ color }) => color};
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1.5rem;
  z-index: 10;
  
  /* Left and Right Positioning */
  &:nth-of-type(1) {
    left: -40px; /* Position left arrow */
  }
  &:nth-of-type(2) {
    right: -40px; /* Position right arrow */
  }
`;

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <SliderWrapper>
      <Button onClick={handlePrev}>{"<"}</Button>
      <AnimatePresence mode="wait">
        <Slide
          key={slides[currentSlide].id}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          color={slides[currentSlide].color}
        >
          {slides[currentSlide].text}
        </Slide>
      </AnimatePresence>
      <Button onClick={handleNext}>{">"}</Button>
    </SliderWrapper>
  );
}
