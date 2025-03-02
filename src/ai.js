import { HfInference } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. 
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, 
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render on a web page.
`

// Ensure you set an environment variable for HF_ACCESS_TOKEN
const hf = new HfInference(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromAI(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            parameters: {
                max_new_tokens: 250, // Ensure it does not exceed the limit
                temperature: 0.7, // Adjust creativity
            }
        })

        return response.choices[0].message.content || "No recipe found. Try different ingredients."
    } catch (err) {
        console.error("Error fetching AI-generated recipe:", err.message)
        return "Oops! Something went wrong while fetching your recipe."
    }
}
