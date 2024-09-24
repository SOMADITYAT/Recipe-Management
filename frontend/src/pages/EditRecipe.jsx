import React from "react";
import RecipeForm from "../components/RecipedFrom";

const EditRecipe = ({ recipe }) => {
  const handleSave = () => {};

  return <RecipeForm existingRecipe={recipe} onSave={handleSave} />;
};

export default EditRecipe;
