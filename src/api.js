import axios from "axios";

const API_URL = "https://ai-qna-backend-396164089466.us-central1.run.app/ask"; // Cloud Run backend

export const askQuestion = async (question) => {
    try {
        console.log("🔄 Sending request to:", API_URL);
        const response = await axios.post(
            API_URL, 
            { question }, 
            {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",  // Ensure CORS headers
                },
                withCredentials: false, // Ensure CORS is not blocked by cookies
            }
        );
        console.log("✅ Response received:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ API Error:", error);
        return { answer: "Error retrieving response" };
    }
};
