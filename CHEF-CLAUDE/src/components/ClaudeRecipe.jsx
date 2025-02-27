import React from "react"
import { getRecipeFromAI } from "../ai"
import ReactMarkdown from "react-markdown"

export default function ClaudeRecipe({ ingredients }) {
    const [recipe, setRecipe] = React.useState("Fetching recipe...");

    React.useEffect(() => {
        async function fetchRecipe() {
            try {
                const aiRecipe = await getRecipeFromAI(ingredients);
                setRecipe(aiRecipe);
            } catch (error) {
                setRecipe("Error fetching recipe. Please try again.");
            }
        }

        fetchRecipe();
    }, [ingredients]);

    return (
        <section>
            <h2>Chef Claude Recommends:</h2>
            <article className="suggested-recipe-container" aria-live="polite">
             <ReactMarkdown>{recipe}</ReactMarkdown>
            </article>
        </section>
    )
}
