import { Router } from "express";
import { healthRouter } from "./health.router";

export const v1Router = Router();

v1Router.use("/health", healthRouter);
