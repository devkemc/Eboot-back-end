import { Request, Response } from "express";
import { AuthenticateUserService } from "../../core/services/authenticate-user-service";

export class AuthenticateUserController {

  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;
    const service = new AuthenticateUserService();
    const data = await service.authenticateUser({ email, senha });
    console.log('data',data);
    
    return res.json(data);
  }
}