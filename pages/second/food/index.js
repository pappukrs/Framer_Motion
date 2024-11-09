// pages/index.js
import React from "react";
import FoodSlider from "./components/FoodSlider";
import CategoryList from "./components/CategoryList";

const foodItems = [
  { image: "https://via.placeholder.com/250", title: "Pizza", description: "Cheesy and delicious" },
  { image: "https://via.placeholder.com/250", title: "Burger", description: "Juicy beef patty with toppings" },
  { image: "https://via.placeholder.com/250", title: "Pasta", description: "Creamy Alfredo sauce with pasta" },
  { image: "https://via.placeholder.com/250", title: "Sushi", description: "Fresh and tasty sushi rolls" },
];

const categories = ["Appetizers", "Main Dishes", "Desserts", "Beverages", "Special Offers"];

const HomePage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Featured Dishes</h2>
      <FoodSlider items={foodItems} />

      <h2>Food Categories</h2>
      <CategoryList categories={categories} />
    </div>
  );
};

export default HomePage;
