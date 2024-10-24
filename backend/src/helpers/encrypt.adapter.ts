import bcrypt from "bcrypt";

export class encrypt {
  static async encryptpass(password: string) {
    const hash = bcrypt.hashSync(password, 12);
    return hash;
  }
}
