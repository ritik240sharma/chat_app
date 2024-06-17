import { Router } from "express";
import {sendmessage,get_messages} from "../controller/message_controller.js";
import protect_route from "../middleware.js/protect_route.js";
const router2=Router();
router2.post("/send/:id" ,sendmessage)
router2.post("/:id"  ,get_messages)
export default router2 
