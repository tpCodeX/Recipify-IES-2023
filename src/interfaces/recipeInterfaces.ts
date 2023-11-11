export interface iRecipeInfo {
    id: number,
    title: string,
    photo:string,
    pasos:string,
    description:string,
    ingredients: string,
    author: string,
    authorID: number,
    createdAt: string,
    updatedAt:  string,
    categoria: string,
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