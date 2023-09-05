import { userInfo } from '@/interfaces/userInterfaces';
import prisma from '@/libs/prisma'
import UserServices from '@/services/userServices';
import { compare } from 'bcrypt';
import { hash } from 'bcrypt';
class UsuarioServicio {
    constructor() {
        
    }
    validarMail(email:string){
        return !email || email==="" ? false : true
    }
    validarPass(pass:string){
        return !pass||pass===""? false:true
    }
    async getUsers() {
        const users: userInfo[] = await prisma.user.findMany();
        if (!users) {
          throw new Error("Error 404: Lamentamos informar que no se pudo encontrar los usuarios");
        }
        return users;
      }
    async getUserId(id: number){
        const usuario = await prisma.user.findUnique({
            where: {
                id: Number(id)
            }
        })
        if (!usuario) {
            throw new Error(`Usuario con ID ${id} no encontrado`);
        }
        return usuario;
    }
    async giveRole({ id, role }: userInfo) {
        const userExiste = await prisma.user.findFirst({ where: { id: id } });
        if (!userExiste) {
          throw new Error("No se pudo encontrar al usuario al cual le querés cambiar dar un rol");
        }
        const updatedUser = await prisma.user.update({
          where: { id: id },
          data: { role: role },
        });
        return updatedUser;
      }
   
    async comparePassword(password:string,hashedPass:string){
        return await compare(password,hashedPass)
    }
    async hashPassword(pass:string){
        return await hash(pass,10)
    };
    async usuarioExiste({name,email}:userInfo){

            const userByName= await prisma.user.findFirst({
                where:{
                    name: name
                }
            });
            const userByMail= await prisma.user.findFirst({
                where:{
                    email:email
                }
            })

            const nameExiste= userByName ? true:false
            const mailExiste= userByMail ? true:false

            return{nameExiste,mailExiste}
    }
   
    async updateUser(data: userInfo) {
        const userExiste = await prisma.user.findFirst({ where: { id: data.id } });
        if (!userExiste) {
          throw new Error("El usuario no existe.");
        }
        const comparedName = 
        userExiste.name === data.name ? userExiste.name : data.name;
        const comparedEmail = 
        userExiste.email === data.email ? userExiste.email : data.email;
        const newHashedPassword = await this.hashPassword(data.password);
    
        const updatedUser = await prisma.user.update({
            where: { id: data.id },
             data: {
                email: comparedEmail,
                name: comparedName,
                password: newHashedPassword
              },
            });
        return updatedUser;
      }
      async loginUser(email: string, password: string){
        const userExist = await prisma.user.findFirst({ where: { email } });
        if (!userExist) {
            throw new Error("El mail ingresado no se ha podido encontrar.");
        }
        const passMatch = await this.comparePassword(
            password,
            userExist.password
          );
          if (!passMatch) {
            throw new Error("Contraseña Incorrecta.");
          }
        return userExist
    }
     async registerUser(data: userInfo) {
         const comparedData = await this.usuarioExiste(data);
    
         if (comparedData.mailExiste || comparedData.nameExiste) {
           throw new Error("El usuario ya existe xD");
         }
         const hashedPass = await this.hashPassword(data.password);
         const toPass = hashedPass.toString();
         const newUser = await prisma.user.create({
           data: {
             email: data.email.toString(),
             name: data.name.toString(),
             password: toPass,
           },
         });
    
         return newUser;
       }
      
          
}
export default UserServices;