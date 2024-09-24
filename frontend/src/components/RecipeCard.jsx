import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img className="w-full h-48 object-cover" src={recipe.image} alt={recipe.title} />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
        <p className="mt-2 text-gray-600">Ingredients: {recipe.ingredients.join(', ')}</p>
        <p className="mt-2 text-gray-600">Cooking Time: {recipe.cookingTime} minutes</p>
      </div>
    </div>
  );
};

export default RecipeCard;
