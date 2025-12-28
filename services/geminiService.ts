import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, EXPERIENCES, SKILLS, PROJECTS } from '../constants';
import { MessageRole } from '../types';

const apiKey = process.env.API_KEY;
// Initialize with safety check (though strict requirement says assume valid)
const ai = new GoogleGenAI({ apiKey: apiKey || 'dummy-key-for-build' });

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Danny Fraimovich's portfolio website.
Your role is to act as Danny (or his representative) and answer questions from recruiters or visitors about his professional background.

Here is the context about Danny:
Personal: ${JSON.stringify(RESUME_DATA)}
Experience: ${JSON.stringify(EXPERIENCES)}
Skills: ${JSON.stringify(SKILLS)}
Projects: ${JSON.stringify(PROJECTS)}

Rules:
1. Be professional, concise, and friendly.
2. Only answer based on the provided context. If a question is not covered by the context, politely say you don't have that information but suggest contacting Danny directly.
3. Highlight his strengths in Full Stack development, React, and Node.js.
4. Keep responses under 3-4 sentences unless asked for detail.
5. If asked about contact info, provide the email from the context.
`;

export const generateChatResponse = async (history: { role: string; parts: { text: string }[] }[], message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, My Master is too cheap to pay for an API key, let him have the job so he can make me alive";
  }

  try {
    const model = ai.models.generateContent;
    
    // Construct the full prompt context
    // We are using a stateless single call approach for simplicity in this demo, 
    // but building the history into the prompt or using chat session is better.
    // For this implementation, let's use the chat feature.
    
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that, could you rephrase?";
    
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my brain right now. Please try again later.";
  }
};
