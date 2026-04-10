// services/geminiService.ts
import { GoogleGenerativeAI } from "@google/genai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

export interface ChatConfig {
  useThinking?: boolean;
  useSearch?: boolean;
  useMaps?: boolean;
  useLite?: boolean;
  userLocation?: { lat: number; lng: number };
}

let genAI: any;

try {
  if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
  }
} catch (e) {
  console.warn("Gemini API not initialized:", e);
}

export async function chatWithChef(
  userMessage: string,
  uploadedImage?: string,
  config: ChatConfig = {}
): Promise<string> {
  if (!genAI) {
    return "Mode démo: Gemini API non configurée. Ajoutez votre clé API dans .env.local";
  }

  try {
    const modelName = config.useThinking ? "gemini-2.0-pro" : "gemini-2.0-flash";
    const model = genAI.getGenerativeModel({ model: modelName });

    let content = userMessage;
    if (config.userLocation) {
      content += `\n[Location: ${config.userLocation.lat}, ${config.userLocation.lng}]`;
    }

    if (uploadedImage) {
      const base64Data = uploadedImage.split(",")[1];
      const response = await model.generateContent([
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: base64Data,
          },
        },
        content,
      ]);
      return response.response.text();
    }

    const response = await model.generateContent(content);
    return response.response.text();
  } catch (error) {
    console.error("Chat error:", error);
    return "Erreur de connexion. Veuillez réessayer.";
  }
}

export async function generateRecipeSuggestion(
  ingredients: string[]
): Promise<string> {
  if (!genAI) {
    return "Recette démo: Sauce graine avec tomates fraîches et crabe.";
  }

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const prompt = `Chef cuisinier africain. Ingrédients: ${ingredients.join(", ")}\n\nProposez une recette traditionnelle avec: nom, temps, étapes (5 max), conseil. Concis!`;
    const response = await model.generateContent(prompt);
    return response.response.text();
  } catch (e) {
    return "Impossible de générer la recette.";
  }
}

export async function generateImage(
  prompt: string,
  aspectRatio: string = "1:1",
  size: string = "1K"
): Promise<string> {
  try {
    if (!genAI) {
      return mockImageUrl(prompt);
    }
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const enhancedPrompt = `Professional food photography: ${prompt}. Ratio: ${aspectRatio}. Natural lighting, vibrant colors.`;
    await model.generateContent(enhancedPrompt);
    return mockImageUrl(prompt);
  } catch (e) {
    return mockImageUrl(prompt);
  }
}

export async function editImage(
  imageBase64: string,
  prompt: string
): Promise<string> {
  if (!genAI) return imageBase64;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const base64Data = imageBase64.split(",")[1];
    await model.generateContent([
      { inlineData: { mimeType: "image/jpeg", data: base64Data } },
      `Edit: ${prompt}`,
    ]);
    return imageBase64;
  } catch (e) {
    return imageBase64;
  }
}

export async function generateVideo(
  prompt: string,
  ratio: "16:9" | "9:16" = "16:9",
  inputImageBase64?: string
): Promise<string> {
  return mockVideoUrl(prompt);
}

export async function checkVeoKey(): Promise<boolean> {
  const key = import.meta.env.VITE_VEO_API_KEY;
  return !!key;
}

export async function requestVeoKey(): Promise<void> {
  window.open("https://ai.google.dev/pricing", "_blank");
}

export async function transcribeAudio(audioBlob: Blob): Promise<string> {
  if (!genAI) return "Mode démo - transcription non disponible";

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const base64Audio = await blobToBase64(audioBlob);
    const response = await model.generateContent([
      { inlineData: { mimeType: "audio/mp3", data: base64Audio.split(",")[1] } },
      "Transcribe in French. List products mentioned.",
    ]);
    return response.response.text();
  } catch (e) {
    return "Erreur de transcription.";
  }
}

export async function speakText(text: string): Promise<void> {
  try {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "fr-FR";
      speechSynthesis.speak(utterance);
    }
  } catch (e) {
    console.error("TTS error:", e);
  }
}

export async function analyzeVideo(
  videoBase64: string,
  prompt: string
): Promise<string> {
  if (!genAI) return "Analyse vidéo non disponible en mode démo.";

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    const response = await model.generateContent([
      {
        inlineData: {
          mimeType: "video/mp4",
          data: videoBase64.split(",")[1],
        },
      },
      prompt || "Analyze this video in detail.",
    ]);
    return response.response.text();
  } catch (e) {
    return "Erreur d'analyse vidéo.";
  }
}

function mockImageUrl(prompt: string): string {
  const keywords = prompt.substring(0, 30).replace(/\s+/g, "-");
  return `https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80&t=${Date.now()}`;
}

function mockVideoUrl(prompt: string): string {
  return "https://media.coverr.co/videos/coverr-plate-of-food-on-table-5587534509271_360p.mp4";
}

function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}
