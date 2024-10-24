export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  roleId: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface IUserDto {
  id: number;
  name: string;
  email: string;
  roleId: number;
  createdAt: Date | null;
  updatedAt: Date | null;
}

export interface UserDTO {
  name: string;
  email: string;
  password: string;
  roleId?: number;
}

export interface DecodedToken {
  userId: number;
  role: string;
}

export class CreateUserDTO {
  name: string;
  email: string;
  password: string;
  roleId?: number;
}

export class LoginDTO {
  email: string;
  password: string;
}
