import { iRecipeInfo } from "./recipeInterfaces"
export interface categoriaInfo{

    id?:number,
    isVisible?:boolean
    name:string
    products?:iRecipeInfo[]
}