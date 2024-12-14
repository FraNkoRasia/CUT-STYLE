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

authRouter.get(
  "/users",
  authMiddleware,
  roleMiddleware(["ADMIN"]),
  AuthController.getAllUsers
);

authRouter.get(
  "/users/:id",
  authMiddleware,
  roleMiddleware(["USER", "BARBER", "ADMIN"]),
  AuthController.getOne
);

authRouter.put(
  "/users/:id",
  authMiddleware,
  roleMiddleware(["BARBER", "ADMIN"]),
  AuthController.update
);

authRouter.delete(
  "/users/:id",
  authMiddleware,
  roleMiddleware(["BARBER", "ADMIN"]),
  AuthController.delete
);
export default authRouter;
