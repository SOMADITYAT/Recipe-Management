// src/pages/RecipePage.jsx
import React from "react";
import RecipeDetail from "../components/RecipeDetail";

const RecipePage = ({ recipe }) => {
  return (
    <div>
      <RecipeDetail recipe={recipe} />
    </div>
  );
};

export default RecipePage;
