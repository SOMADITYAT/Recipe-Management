import Recipe from "../models/Recipe";

export const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createRecipe = async (req, res) => {
  const { title, ingredients, cookingTime } = req.body;
  try {
    const newRecipe = new Recipe({ title, ingredients, cookingTime });
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(400).json({ message: "Invalid data" });
  }
};
