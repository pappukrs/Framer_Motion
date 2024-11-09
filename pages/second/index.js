// pages/index.js
import React from "react";
import DraggableCard from "./card/DraggableCard";
import DraggableSlider from "./slider/DraggableSlider";
import DraggableList from "./vertical/DraggableList";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", display: "flex", flexDirection: "column", gap: "40px" }}>
      <h2>Draggable Card</h2>
      <DraggableCard />

      <h2>Horizontal Draggable Slider</h2>
      <DraggableSlider />

      <h2>Vertical Draggable List</h2>
      <DraggableList />
    </div>
  );
};

export default HomePage;
