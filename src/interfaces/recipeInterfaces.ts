import { categoriasInterface } from "./categoriasInterface"
import { IuserInfo } from "./userInterfaces"

export interface iRecipeInfo {
    id: number,
    title: string,
    photo:string,
    pasos:string,
    description:string,
    ingredients: string,
    author: IuserInfo,
    authorID: number,
    createdAt: string,
    updatedAt:  string,
    categoria: string|categoriasInterface,
    categoriaID: number
};

export interface ingredient{
    id:number|string,
    name:string,
    cuantity:string
}

export interface iSearchedRecipe{
    searchedWords:string,
}