import { userInfo } from "@/interfaces/userInterfaces";
import prisma from '@/libs/prisma'
import { compare } from 'bcryptjs';
import { hash } from 'bcryptjs';
class UserServices {

   async compararPassword(password:string, repeatPassword?:string){
    const resultado= password == repeatPassword ? true : false
    return resultado
   }

   
    async findByMail(email:string){
      const emailExiste=  await prisma.user.findFirst({
        where: {email : email}
     })
     return emailExiste
    }
    async existeNameEnBaseDedatos(name:string){
      const nameExiste=  await prisma.user.findFirst({
        where: {name : name}
     })
     return nameExiste
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
    async getUserByEmail(email: string){
        const usuario = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (!usuario) {
            return undefined;
        }
        return usuario;
    }
    async comparePassword(password:string,hashedPass:string){
        return await compare(password,hashedPass)
    }
    async hashPassword(pass:string){
        return await hash(pass,10)
    };
   
  /////
  validarCampos(name:string,email:string ,password:string, repeatPassword?:string){
    if(name=="" || email== "" ||password == "" || repeatPassword == ""){
      throw new Error("Todos los campos son obligatorios")
    }
}
validarEmail(email:string){
    return !email || email==="" ? false : email.includes("@")
}
compararPasswordYrepeatPassword(password:string, repeatPassword?:string){
    const resultado=this.compararPassword(password,repeatPassword)
    if(!resultado){
      throw new Error("Las contraseñas deben ser iguales")
    }
}
async comprobarEmailSinoError(email:string){
    if(!this.validarEmail(email)){
      throw new Error("El email debe contener @")
  }
}
async existNameDatabase(name:string){
    const nameExiste=  await prisma.user.findFirst({
      where: {name : name}
   })
    if(nameExiste){
      throw new Error ("El nombre ingresado existe en la base de datos")
    }
} 
async existEmailDatabase(email:string){
    const emailExiste=  await prisma.user.findFirst({
      where: {email : email}
   })
    if(emailExiste){
      throw new Error ("El email ingresado existe en la base de datos")
    }
  }
async updateUser(data: userInfo) {
        this.validarCampos(data.name,data.email,data.password,data.repeatPassword)
        this.compararPasswordYrepeatPassword(data.password,data.repeatPassword)
        await this.comprobarEmailSinoError(data.email)
        await this.existNameDatabase(data.name)
        await this.existEmailDatabase(data.email)
        const idNumber=Number(data.id)
        const newHashedPassword = await this.hashPassword(data.password);
        const updatedUser = await prisma.user.update({
            where: { id: idNumber },
             data: {
                email: data.email,
                name: data.name,
                password: newHashedPassword
              },
            });
        return updatedUser;
      }





  ////

     async registrarUser(data: userInfo) {
         const hashedPass = await this.hashPassword(data.password);
         const newUser = await prisma.user.create({
           data: {
             email: data.email.toString(),
             name: data.name.toString(),
             password: hashedPass.toString(),
             country: data.country.toString(),
             role:data.role?.toString()
           },
         });
        return newUser;
       }

      async authorizeUser(email:string,password:string){
        const userExist= await this.getUserByEmail(email);
        const passwordMatches=await this.compararPassword(password,userExist?.password as string);//matchea la pass
        if(!userExist || !passwordMatches){
          return null;
        }
        const authorizedUser={
          id:userExist?.id.toString() as string,
          name:userExist?.name as string,
          email:userExist?.email as string,
          password:userExist?.password as string,
          country:userExist?.country as string,
          role:userExist?.role as string,
        }
        return authorizedUser
        
        
        //Si el usuario existe y la pass matchea, devuelve true :D
      }

};

export const userServices = new UserServices();

export default UserServices;
