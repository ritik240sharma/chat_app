import {GoogleGenerativeAI} from "@google/generative-ai";
import dotenv from "dotenv"
dotenv.config()
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_KEY);

async function GenAi(req,res) {
  const {prompt,wordlimit}=req.body;
  try{
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
  const result = await model.generateContentStream(prompt);
  const response = await result.response;
  var text = response.text();
  text = text.split(' ').slice(0, wordlimit).join(' ');
  console.log(text)
  res.json({text:text})
  }
  catch(err)
  {
    res.json({error:err.message})
  }
}

export default GenAi;











