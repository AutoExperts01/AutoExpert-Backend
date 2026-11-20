import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";

export function errorHandler(
  error: Error,
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  logger.error({ error }, "unhandled error");
}
