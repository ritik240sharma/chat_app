import { Router } from "express";
import {Create_Group,SendgroupMessages,getGroupInfo, getGroupMessage,} from "../controller/groupController.js";
const group_route=Router();

group_route.post("/create_group",Create_Group);
group_route.get("/getGroupMessage/:id",getGroupMessage);
group_route.get("/getGroupInfo/:id",getGroupInfo);
group_route.post("/send",SendgroupMessages);

export default group_route 