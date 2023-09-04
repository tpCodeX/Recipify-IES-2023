import prisma from "@/libs/prisma"

class UserServices {

    async getUsers(){
        const users = await prisma.user.findMany()
        return users
    }
};

export default UserServices;