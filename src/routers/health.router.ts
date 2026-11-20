import { Router } from "express";
import { HttpStatus } from "../config/http-status";

export const healthRouter = Router();

healthRouter.get("/", (_req, res) => {
  res.status(HttpStatus.OK).json({ status: "ok" });
});
