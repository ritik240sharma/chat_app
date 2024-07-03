import { Router } from "express";
import GenAi from "../GenerativeAi/GenAi.js";
export const ai_response=Router();

ai_response.post("/",GenAi)
