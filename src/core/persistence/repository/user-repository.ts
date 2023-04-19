import { AbstractRepository } from "./abstract-repository";

export class UserRepository extends AbstractRepository {
  constructor() {
    super();
  }
  public async findUserByEmail(email: string) {
    try {
      const user = await this.conection.usuarios.findUnique({
        where: {
          user_email: email,
        },
      });
      return user;
    } catch {
      return null;
    } finally {
      await this.destroy();
    }
  }
}
