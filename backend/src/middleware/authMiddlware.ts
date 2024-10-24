import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { DecodedToken } from "../interfaces/user.interface";

const SECRET_KEY = process.env.JWT_SECRET || "secret";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No tienes acceso a este recurso" });
    return;
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as DecodedToken;
    req.body.decoded = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token invalido" });
  }
};

export const roleMiddleware = (roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const decoded = req.body.decoded as DecodedToken | undefined;

    if (!decoded || !roles.includes(decoded.role)) {
      res.status(403).json({ message: "No tienes acceso a este recurso" });
      return;
    }

    next();
  };
};
