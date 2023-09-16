import OpenAI from "openai";
import { OPENAI_SECRET } from "./constants/constants";

const openai = new OpenAI({
  apiKey: OPENAI_SECRET,
  dangerouslyAllowBrowser: true,
});

export default openai;
