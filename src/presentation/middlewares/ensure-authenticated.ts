import {Request, Response, NextFunction} from "express";
import {verify} from "jsonwebtoken";
import {HttpUnauthorized} from "../utils/errors/http-unauthorized";



interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    console.log('esta aqui')
    const authToken = request.headers.authorization;
    if (!authToken) throw new HttpUnauthorized('Realize login para acessar esse endpoint')
    const [, token] = authToken!.split(" ");

    try {
        verify(
            token,
            "4f93ac9d10cb751b8c9c646bc9dbccb9")
        return next();
    } catch (e) {
       throw new HttpUnauthorized("Token inválido, realize o login novamente")
    }


}
