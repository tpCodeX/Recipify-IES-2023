import jwt,{ JwtPayload } from "jsonwebtoken";

interface SignOption {
//fecha de caducidad del token
    expiresIn?:string | number;
}

const DEFAULT_SIGN_OPTION: SignOption={
    expiresIn:"1h"
}
//para crear el token
//payload informacion que queremos en el token por ejemplo rol, nombre, etc
//colocamos DEFAULT_SIGN_OPTION para que no te lo pida cada vez que llames a esto
export function signJwtAccessToken(payload:JwtPayload, options:SignOption= DEFAULT_SIGN_OPTION){
//recuperamos o extraemos la clase secreta del archivo .env
    const secret_key=process.env.SECRET_KEY;
//le colocas ! a secret_key para que no tengamos problemas en los tipos 
    const token= jwt.sign(payload,secret_key!,options)
    return token
}

export function verifyJwt(token:string){
    try {
    const secret_key=process.env.SECRET_KEY;
//verificamos si el token no ha sido manipulado 
    const decoded= jwt.verify(token,secret_key!)
// devolvemos como Jwtpayload xq es una forma conveniente de acceder a los claims del token JWT
    return decoded as JwtPayload
    } catch (error) {
        console.log(error);
        return null;
    }
}