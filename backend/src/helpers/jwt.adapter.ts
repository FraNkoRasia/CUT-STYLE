import jwt from "jsonwebtoken";

export class JwtAdapter {
  // static async generateToken(payload: any, duration: string = '24h'): Promise<string | null> {
  //     const secret = process.env.JWT_SECRET;
  //     if (!secret) {
  //         console.error('JWT_SECRET is not defined');
  //         return null;
  //     }
  //     return new Promise((resolve, reject) => {
  //         jwt.sign(payload, secret, { expiresIn: duration }, (err, token) => {
  //             if (err) {
  //                 console.error('Error signing token:', err);
  //                 return resolve(null);
  //             }
  //             resolve(token);
  //         });
  //     });
  // }

  static validateToken<T>(token: string): Promise<T | null> {
    return new Promise((resolve) => {
      jwt.verify(
        token,
        process.env.JWT_SECRET || "secret",
        (err: any, decoded: any) => {
          if (err) return resolve(null);

          resolve(decoded as T);
        }
      );
    });
  }
}
