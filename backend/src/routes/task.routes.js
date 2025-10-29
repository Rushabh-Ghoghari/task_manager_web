import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import authWebsite from "../middlewares/auth.middleware.js";

const taskRouter = express.Router();

taskRouter.post("/", authWebsite([]), createTask); // create task
taskRouter.get("/", authWebsite([]), getTasks); // get tasks (admin: all, user: own)
taskRouter.put("/:id", authWebsite([]), updateTask); // update task (admin or owner)
taskRouter.delete("/:id", authWebsite([]), deleteTask); // delete task (admin only)

export default taskRouter;
