import { Request, Response } from "express";
import { AuthenticateUserService } from "../../core/services/authenticate-user-service";

export class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const service = new AuthenticateUserService();
    const result = await service.authenticateUser({ email, senha });
    return res.status(result.status).json(result.getResult());
  }
}