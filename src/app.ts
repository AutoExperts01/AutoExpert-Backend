import express from "express";
import { apiRouter } from "./routers/api.router";
import { notFound } from "./middlewares/not-found";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from ${req.url}`);
  });

  app.use("/api", apiRouter);

  app.use(notFound);

  return app;
}
