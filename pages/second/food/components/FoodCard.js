// components/FoodCard.js
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Card = styled(motion.div)`
  width: 250px;
  height: 350px;
  background-color: #fff;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: grab;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

const FoodDetails = styled.div`
  padding: 15px;
  color: #333;
`;

const FoodTitle = styled.h3`
  margin: 0;
  font-size: 1.2em;
  font-weight: bold;
`;

const FoodDescription = styled.p`
  margin-top: 5px;
  font-size: 0.9em;
  color: #555;
`;

const FoodCard = ({ image, title, description }) => {
  return (
    <Card
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      whileTap={{ scale: 0.95 }}
    >
      <FoodImage src={image} alt={title} />
      <FoodDetails>
        <FoodTitle>{title}</FoodTitle>
        <FoodDescription>{description}</FoodDescription>
      </FoodDetails>
    </Card>
  );
};

export default FoodCard;
