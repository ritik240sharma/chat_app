import { Router } from "express";
import protect_route from "../middleware.js/protect_route.js";
import getSideUser from "../controller/getSideUser.js";

const users_route=Router();
users_route.post("/", protect_route,getSideUser);

export default users_route

