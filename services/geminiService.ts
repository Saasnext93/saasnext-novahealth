
import { GoogleGenAI } from "@google/genai";

// Initialize the GoogleGenAI client with the API key from environment variables as required.
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || process.env.API_KEY;

if (!apiKey || apiKey === 'PLACEHOLDER_API_KEY') {
  console.warn('⚠️ Gemini API key is not set. Please add VITE_GEMINI_API_KEY to your .env.local file.');
}

const ai = apiKey && apiKey !== 'PLACEHOLDER_API_KEY' ? new GoogleGenAI({ apiKey }) : null;

export const getHealthAssistantResponse = async (userMessage: string) => {
  if (!ai) {
    return "⚠️ AI Assistant is not configured. Please set up your Gemini API key in the .env.local file (VITE_GEMINI_API_KEY=your_key_here) and restart the server.";
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: "You are Nova, an empathetic and professional medical assistant for NovaHealth. You provide helpful information about healthcare services, healthy living, and general medical FAQs. ALWAYS state that you are an AI and not a substitute for professional medical advice. If a user describes an emergency, tell them to call emergency services immediately.",
        temperature: 0.7,
        topP: 0.8,
      },
    });
    // Access the text property directly on the response object.
    return response.text || "I'm sorry, I couldn't process that. Please try again or contact our front desk.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our assistant is currently resting. Please call us directly for immediate support.";
  }
};