import {prisma} from '@/libs/prisma'
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
    
    

}