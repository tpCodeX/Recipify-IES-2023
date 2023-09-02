import {prisma} from '@/libs/prisma'
import { compare } from 'bcrypt';
import { hash } from 'bcrypt';
class UsuarioServicio {
    constructor() {
        
    }
    async getUserId(id: number){
        const usuario = await prisma.task.findUnique({
            where: {
                id: Number(id)
            }
        })
    }
    async loginUser(email: string, password: string){
        const userExist = await prisma.user.findFirst({ where: { email } });
        if (!userExist) {
            throw new Error("El mail ingresado no se ha podido encontrar.");
        }

    }
    async comparePassword(password:string,hashedPass:string){
        return await compare(password,hashedPass)
    }
    async hashPassword(pass:string){
        return await hash(pass,10)
    };
    async usuarioExiste({userName,email}:IUser){

            const userByName= await prisma.user.findFirst({
                where:{
                    userName: userName
                }
            });
            const userByMail= await prisma.user.findFirst({
                where:{
                    email:email
                }
            })

            const nameExiste= userByName? true:false
            const mailExiste= userByMail? true:false

            return{nameExiste,mailExiste}
    }

}