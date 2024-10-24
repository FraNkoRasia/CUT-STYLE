import { encrypt } from "../helpers/encrypt.adapter";
import { prisma } from "../data/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  CreateUserDTO,
  DecodedToken,
  IUser,
  LoginDTO,
} from "../interfaces/user.interface";

const SECRET_KEY = process.env.JWT_SECRET || "secret";

export class AuthService {
  static async registerUser(data: CreateUserDTO): Promise<IUser> {
    let roleId = data.roleId;
    const hashPassword = await encrypt.encryptpass(data.password);

    if (roleId) {
      const userRole = await prisma.role.findUnique({
        where: { id: roleId },
      });

      if (!userRole) {
        throw new Error("Invalid role provided.");
      }
    } else {
      const userRole = await prisma.role.findFirst({
        where: { name: "USER" },
      });

      if (!userRole) {
        throw new Error('Default role "USER" not found in the database.');
      }

      roleId = userRole.id;
    }

    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashPassword,
        roleId: roleId,
      },
    });

    return newUser;
  }

  static async login(loginDTO: LoginDTO) {
    const user = await prisma.user.findUnique({
      where: { email: loginDTO.email },
      include: { role: true },
    });

    if (!user) throw new Error("User not found");

    const validPassword = await bcrypt.compare(
      loginDTO.password,
      user.password
    );
    if (!validPassword) throw new Error("Invalid password");

    const token = jwt.sign(
      { userId: user.id, role: user.role.name },
      SECRET_KEY,
      { expiresIn: "24h" }
    );

    return { token };
  }

  async verifyToken(token: string) {
    try {
      return jwt.verify(token, SECRET_KEY) as DecodedToken;
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
}
