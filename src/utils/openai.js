import OpenAI from "openai";
import { OPENAI_SECRET } from "./constants/constants";
console.log({OPENAI_SECRET})

const openai = new OpenAI({
  apiKey: OPENAI_SECRET,
  dangerouslyAllowBrowser: true,
});

export default openai;
