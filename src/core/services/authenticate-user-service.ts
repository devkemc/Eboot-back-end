interface IAuthenticateRequest {
  email: string;
  password: string;
}
export class AuthenticateUserService {
  async authenticateUser({ email, password }: IAuthenticateRequest){
    
  }
}
