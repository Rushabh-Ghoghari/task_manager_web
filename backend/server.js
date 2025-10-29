//
import "dotenv/config.js";
import express from "express";
import cors from "cors";
import fs from "fs";
import { connect } from "./src/config/db.js";
import indexRouter from "./src/routes/index.js";

const app = express();

// middlewares
app.use(cors({ credentials: true, optionsSuccessStatus: 200 }));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ extended: true, limit: "50mb", parameterLimit: 50000 })
);

// database connection
await connect();

// API
app.use("/", indexRouter);

// Express error handler
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV === "development") console.error(err.stack);
  res.status(400).send(err.message);
});

app.listen(8081, () => {
  console.log(`Server listening on port ${8081}.`);
});
