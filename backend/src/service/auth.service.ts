import { encrypt } from "../helpers/encrypt.adapter";
import { prisma } from "../data/postgres";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import {
  CreateUserDTO,
  DecodedToken,
  IUser,
  IUserDto,
  LoginDTO,
} from "../interfaces/user.interface";

const SECRET_KEY = process.env.JWT_SECRET || "secret";

export class AuthService {
  static async registerUser(data: CreateUserDTO): Promise<IUserDto> {
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
    const userdb = await prisma.user.findUnique({
      where: { email: loginDTO.email },
      include: { role: true },
    });

    if (!userdb) throw new Error("User not found");

    const validPassword = await bcrypt.compare(
      loginDTO.password,
      userdb.password
    );
    if (!validPassword) throw new Error("Invalid password");

    const user = excludeSensitiveInfo(userdb);

    const token = jwt.sign(
      { userId: userdb.id, role: userdb.role.name },
      SECRET_KEY,
      { expiresIn: "24h" }
    );

    return { token, user };
  }

  async verifyToken(token: string) {
    try {
      return jwt.verify(token, SECRET_KEY) as DecodedToken;
    } catch (err) {
      throw new Error("Invalid token");
    }
  }
}

function excludeSensitiveInfo(user: IUser) {
  const { password, roleId, ...userWithoutSensitiveInfo } = user;
  return userWithoutSensitiveInfo;
}
