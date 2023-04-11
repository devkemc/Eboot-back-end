import { hash } from "bcryptjs"

export const cryptoPassword =  async(pass:string) =>{
    const passHash = await hash(pass,8)
    return passHash
}