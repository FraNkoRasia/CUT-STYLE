import bcrypt from 'bcrypt';


export class encrypt {

    static async encryptpass(password: string) {
        const hash = bcrypt.hashSync(password, 12);
        return hash;
    }

    static compare(password: string, hash: string) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, (err, same) => {
                if (err) reject(err);
                resolve(same);
            });
        });
    }
}