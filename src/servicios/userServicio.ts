import {prisma} from '@/libs/prisma'
import { compare } from 'bcrypt';
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
    
    

}