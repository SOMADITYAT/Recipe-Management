// src/components/RecipeDetail.jsx
import React from "react";

const RecipeDetail = ({ recipe }) => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <p><strong>Cooking Time:</strong> {recipe.cookingTime} minutes</p>
    </div>
  );
};

export default RecipeDetail;
