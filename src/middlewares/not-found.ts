import { Request, Response } from "express";
import { HttpStatus } from "../config/http-status";

export function notFound(_req: Request, res: Response): void {
  res.status(HttpStatus.NOT_FOUND).json({
    success: false,
    message: "Route not found",
  });
}
