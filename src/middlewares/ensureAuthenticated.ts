import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;
  // se token form invalido
  if (!authToken) {
    return response.status(401).json({
      message: "Unauthorized - Token is missing!",
    });
  }
  const [, token] = authToken.split(" ");
  try {
    verify(token, process.env.KEY_UUID);
    return next();
  } catch (err) {
    return response.status(401).json({
      message: "Token invalid!",
    });
  }
}
