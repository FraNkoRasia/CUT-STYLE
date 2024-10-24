import { Response, Request, NextFunction, Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import { authMiddleware, roleMiddleware } from "../middleware/authMiddlware";

const authRouter = Router();

authRouter.post("/register", AuthController.register);
authRouter.post("/login", AuthController.login);

authRouter.get(
  "/admin",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  (req: Request, res: Response) => {
    res.json({ message: "Bienvenido, Admin" });
  }
);

authRouter.get(
  "/user",
  authMiddleware,
  roleMiddleware(["USER", "ADMIN"]),
  (req, res) => {
    res.json({ message: "Bienvenido, User" });
  }
);

export default authRouter;
