import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   const fetchRecipes = async () => {
  //     try {
  //       const response = await getRecipes();
  //       setRecipes(response.data);
  //     } catch (error) {
  //       console.error("Error fetching recipes:", error);
  //     }
  //   };

  //   fetchRecipes();
  // }, []);

  // const handleDelete = async (recipeId) => {
  //   if (window.confirm("Are you sure you want to delete this recipe?")) {
  //     try {
  //       await deleteRecipe(recipeId);
  //       setRecipes(recipes.filter((recipe) => recipe._id !== recipeId));
  //     } catch (error) {
  //       console.error("Error deleting recipe:", error);
  //     }
  //   }
  // };

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe._id}>
            <h3>{recipe.title}</h3>
            <p>Cuisine Type: {recipe.cuisineType}</p>
            <p>Cooking Time: {recipe.cookingTime}</p>
            <Link to={`/recipe/${recipe._id}`}>Edit</Link>
            <button onClick={() => handleDelete(recipe._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
