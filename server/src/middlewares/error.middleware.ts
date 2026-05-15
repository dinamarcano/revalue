import type { Request, Response, NextFunction } from "express";

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  console.error(err.message);
  res.status(500).json({ message: err.message || "Internal server error" });
}
