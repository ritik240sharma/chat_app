import { Router } from "express";
import {sendmessage,get_messages} from "../controller/message_controller.js";
import protect_route from "../middleware.js/protect_route.js";
const router2=Router();
router2.post("/send/:id",protect_route ,sendmessage)
router2.get("/:id",protect_route ,get_messages)
export default router2