import { Conection } from "./conection";

export class UserRepository {
  constructor() {
  }
  public async findUserByEmail(email: string) {
    try {
      const user = await Conection.getConection().usuarios.findUnique({
        where: {
          user_email: email,
        },
      });
      return user;
    } catch {
      return null;
    } finally {
    }
  }
}
