// import React, { useState, useEffect } from "react";
// import { addRecipe, updateRecipe, getRecipe } from "../api/api";
// import { useParams, useNavigate } from "react-router-dom";

// const RecipeForm = ({ recipeId }) => {
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState([]);
//   const [instructions, setInstructions] = useState("");
//   const [cuisineType, setCuisineType] = useState("");
//   const [cookingTime, setCookingTime] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (recipeId) {
//       const fetchRecipe = async () => {
//         const response = await getRecipe(recipeId);
//         const recipe = response.data;
//         setTitle(recipe.title);
//         setIngredients(recipe.ingredients);
//         setInstructions(recipe.instructions);
//         setCuisineType(recipe.cuisineType);
//         setCookingTime(recipe.cookingTime);
//       };

//       fetchRecipe();
//     }
//   }, [recipeId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const recipeData = {
//       title,
//       ingredients: ingredients
//         .split(",")
//         .map((ingredient) => ingredient.trim()),
//       instructions,
//       cuisineType,
//       cookingTime,
//     };

//     if (recipeId) {
//       await updateRecipe(recipeId, recipeData);
//     } else {
//       await addRecipe(recipeData);
//     }
//     navigate("/");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>{recipeId ? "Edit Recipe" : "Add Recipe"}</h2>
//       <input
//         type="text"
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Ingredients (comma separated)"
//         value={ingredients.join(", ")}
//         onChange={(e) => setIngredients(e.target.value)}
//         required
//       />
//       <textarea
//         placeholder="Instructions"
//         value={instructions}
//         onChange={(e) => setInstructions(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Cuisine Type"
//         value={cuisineType}
//         onChange={(e) => setCuisineType(e.target.value)}
//         required
//       />
//       <input
//         type="text"
//         placeholder="Cooking Time"
//         value={cookingTime}
//         onChange={(e) => setCookingTime(e.target.value)}
//         required
//       />
//       <button type="submit">{recipeId ? "Update" : "Add"} Recipe</button>
//     </form>
//   );
// };

// export default RecipeForm;
