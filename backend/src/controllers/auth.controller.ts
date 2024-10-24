import { Request, Response } from "express";
import { CreateUserDTO, LoginDTO } from "../interfaces/user.interface";
import { AuthService } from "../service/auth.service";

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const createUserDTO: CreateUserDTO = req.body;
      const user = await AuthService.registerUser(createUserDTO);
      res.status(201).json(user);
    } catch (err) {
      res
        .status(400)
        .json({ message: "Error al registrar el usuario, intente más tarde" });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const loginDTO: LoginDTO = req.body;
      const token = await AuthService.login(loginDTO);
      res.status(200).json(token);
    } catch (err) {
      res
        .status(401)
        .json({ message: "Datos de usuario incorrectos, intente nuevamente" });
    }
  }
}
