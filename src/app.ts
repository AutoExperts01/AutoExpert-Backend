import express from "express";
import { apiRouter } from "./routers";
import { notFound } from "./middlewares/not-found";
import { errorHandler } from "./middlewares/error-handler";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from ${req.url}`);
  });

  app.use("/api", apiRouter);

  app.use(errorHandler);
  app.use(notFound);

  return app;
}
