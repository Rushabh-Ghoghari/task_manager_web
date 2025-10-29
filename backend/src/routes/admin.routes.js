import express from "express";
import wrapAsync from "../utils/wrapAsync.js";
import authWebsite from "../middlewares/auth.middleware.js";
import { login, profile, signup } from "../controllers/admin.controller.js";

const adminRouter = express.Router();

adminRouter.get("/profile", authWebsite([]), wrapAsync(profile));
adminRouter.post("/login", wrapAsync(login));
adminRouter.post("/signup", wrapAsync(signup));

export default adminRouter;
