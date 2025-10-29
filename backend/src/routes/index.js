import express from "express";
import adminRouter from "./admin.routes.js";
import taskRouter from "./task.routes.js";
import userRouter from "./user.routes.js";

const indexRouter = express.Router();

indexRouter.use("/v1/admin", adminRouter);
indexRouter.use("/v1/task", taskRouter);
indexRouter.use("/v1/user", userRouter);

export default indexRouter;
