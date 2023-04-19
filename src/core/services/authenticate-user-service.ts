import {Usuarios} from "@prisma/client";

import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";
import {UserRepository} from "../persistence/repository/user-repository";
import {BaseError} from "../../presentation/utils/errors/base-error";
import {HttpUnauthorized} from "../../presentation/utils/errors/http-unauthorized";

interface IAuthenticateRequest {
    email: string;
    senha: string;
}

export class AuthenticateUserService {
    private repository;

    constructor() {
        this.repository = new UserRepository();
    }

    async authenticateUser({email, senha}: IAuthenticateRequest) {
        console.log('esta na service');
        const user: Usuarios | null = await this.repository.findUserByEmail(email);
        console.log('user', user);

        if (!user) throw new HttpUnauthorized("Email ou senha incorretos");
        const validatePassword = await compare(senha, user?.user_senha);

        if (!validatePassword) throw new HttpUnauthorized("Email ou senha incorretos");


        return sign(
            {
                email: user.user_email,
            },
            "4f93ac9d10cb751b8c9c646bc9dbccb9",
            {
                subject: String(user.user_id),
                expiresIn: "1d",
            }
        );
    }
}
