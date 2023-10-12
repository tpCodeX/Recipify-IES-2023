export interface userLogin{
    email:string
    password:string
}


export interface userInfo{
    id?:number,
    email:string,
    name:string,
    password:string,
    repeatPassword?: string,
    role:string,
}