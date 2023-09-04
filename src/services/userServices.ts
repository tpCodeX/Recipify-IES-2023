import prisma from "@/libs/prisma"
import { userInfo } from "@/interfaces/userInterfaces";

class UserServices {

    async getUsers(){
        const users:userInfo[] = await prisma.user.findMany()
        return users as userInfo[];
    }
};

export default UserServices;