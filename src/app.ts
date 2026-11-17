import express from "express";
import { apiRouter } from "./router/api.router";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from ${req.url}`);
  });

  app.use("/api", apiRouter);

  return app;
}
