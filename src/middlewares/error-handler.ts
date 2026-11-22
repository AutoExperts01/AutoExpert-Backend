import { NextFunction, Request, Response } from "express";
import { logger } from "../lib/logger";
import { AppError } from "../lib/app-error";
import { HttpStatus } from "../config/http-status";

export function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  logger.error({ err }, "unhandled error");

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });

    return;
  }

  res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: "Internal server error",
  });
}