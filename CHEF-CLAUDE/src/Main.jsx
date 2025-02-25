import React from "react"
import ClaudeRecipe from "../src/components/ClaudeRecipe"
import IngredientsList from "../src/components/IngredientsList"

export default function Main() {

    const [ingredients, setIngredients] = React.useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"]
    )

    const [recipeShown, setRecipeShown] = React.useState(false)


    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown() {
        setRecipeShown(prevShown => !prevShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients={ingredients} 
                    toggleRecipeShown={toggleRecipeShown}
                />}
            {recipeShown && <ClaudeRecipe />}
        </main>
    )
}