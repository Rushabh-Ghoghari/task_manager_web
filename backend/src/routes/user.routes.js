import express from "express";
import { getUsers, getUserById } from "../controllers/user.controller.js";
import authWebsite from "../middlewares/auth.middleware.js";

const userRouter = express.Router();

userRouter.get("/", authWebsite([]), getUsers);
userRouter.get("/:id", authWebsite([]), getUserById);

export default userRouter;
