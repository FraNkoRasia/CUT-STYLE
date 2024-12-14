import { Request, Response } from "express";
import { CreateUserDTO, LoginDTO } from "../interfaces/user.interface";
import { AuthService } from "../service/auth.service";
import logger from "../middleware/logger";

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

  static async getAllUsers(req: Request, res: Response) {
    try {
      const users = await AuthService.getUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
  }

  
  /////////////////////
  static async getOne(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const barbershop = await AuthService.getUsersById(Number(id));
      if (!barbershop) {
        res.status(404).json({ message: "Barberia no encontrada" });
        return;
      }
      res.status(200).json(barbershop);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Error al obtener la barberia" });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const data: CreateUserDTO = req.body;
      const updatedBarbershop = await AuthService.updateUser(
        Number(id),
        data
      );
      res.status(200).json(updatedBarbershop);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Error al actualizar la barberia" });
    }
  }

  static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const barbershop = await AuthService.deleteUser(Number(id));
      res.status(200).json(barbershop);
    } catch (error) {
      logger.error(error);
      res.status(400).json({ message: "Error al eliminar la barberia" });
    }
  }
  ///////////////
}
