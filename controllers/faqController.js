import FAQ from "../models/faq.js";
import { translateText } from "../utils/translate.js";
import redisClient from "../utils/cache.js";

export const getFAQs = async (req, res) => {
  try {
    const { lang } = req.query || "en";
    const cacheKey = `faqs_${lang}`;

    const cachedFAQs = await redisClient.get(cacheKey);
    if (cachedFAQs) {
      console.log("🔵 Served from cache");
      return res.json(JSON.parse(cachedFAQs));
    }
    const faqs = await FAQ.find();

    if (lang !== "en") {
      for (let faq of faqs) {
        const translatedQuestion = await translateText(faq.question, lang);
        const translatedAnswer = await translateText(faq.answer, lang);

        faq.question = translatedQuestion;
        faq.answer = translatedAnswer;
      }
    }

    await redisClient.set(cacheKey, JSON.stringify(faqs), "EX", 3600);

    res.json(faqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const createFAQ = async (req, res) => {
  try {
    await redisClient.flushDb();
    const { question, answer } = req.body;
    console.log("Creatd FAQ", question, answer);
    const faq = new FAQ({ question, answer });
    await faq.save();

    res.status(201).json(faq);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
