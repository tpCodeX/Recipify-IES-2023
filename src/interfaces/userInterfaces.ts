export interface userLogin{
    email:string
    password:string
}


export interface IuserInfo{
    id?:number,
    email:string,
    name:string,
    password:string,
    repeatPassword?: string,
    country:string,
    role:string,
}


