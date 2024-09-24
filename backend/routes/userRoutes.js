import express from "express";
import { getRecipes, createRecipe } from "../controllers/recipeController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth, getRecipes);
router.post("/", auth, createRecipe);

export default router;
