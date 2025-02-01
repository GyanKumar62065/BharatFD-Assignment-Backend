import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

export async function translateText(text, targetLang) {
  try {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_TRANSLATE_API_KEY}`;
    const response = await axios.post(url, { q: text, target: targetLang });

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}
