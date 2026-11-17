import express from "express";
import { healthRouter } from "./router/health.router";

export function createApp() {
  const app = express();

  app.get("/", (req, res) => {
    res.send(`Hello from ${req.url}`);
  });

  app.use("/health", healthRouter);

  return app;
}
