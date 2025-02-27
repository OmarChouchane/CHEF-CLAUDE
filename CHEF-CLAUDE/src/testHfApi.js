import { HfInference } from '@huggingface/inference';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const hfAccessToken = process.env.VITE_HF_ACCESS_TOKEN;

if (!hfAccessToken) {
    throw new Error("Hugging Face API Key is missing! Check your .env file.");
}

const hf = new HfInference(hfAccessToken);

async function testHuggingFaceAPI() {
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: "You are an AI assistant." },
                { role: "user", content: "I have chicken, pasta, and tomatoes. Give me a recipe." }
            ],
            max_tokens: 512,
        });

        console.log("API Response:", response.choices[0].message.content);
    } catch (err) {
        console.error("Error fetching recipe:", err);
    }
}

testHuggingFaceAPI();
