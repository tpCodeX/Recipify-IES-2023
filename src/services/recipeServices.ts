import prisma from "@/libs/prisma";
import { iRecipeInfo } from "@/interfaces/recipeInterfaces";

class RecipeServices {
  validarCampos(titulo:string,descripcion:string ,ingredientes:string, categoria:string){
    if(titulo=="" || descripcion== "" ||ingredientes == "" || categoria == ""){
      throw new Error("Todos los campos son obligatorios")
    }
   }
  async getRecipe() {
    const recipe = await prisma.recipe.findMany({
      include: {
        categoria: true
      }
    });
    if (!recipe) {
      throw new Error(
        "Error 404. No se encontraron recetas."
      );
    }
    return recipe;
  }

  async getRecipeByID(id: number) {
    if (!id) {
      throw new Error(
        "Error 409. No se recibe el ID."
      );
    }
    const recipe = await prisma.recipe.findFirst({
      where: {
        id: id,
      },
    });
    if (!recipe) {
      throw new Error(
        "Error 404. La receta no existe o no está disponible."
      );
    }
    return recipe;
  }

  async addRecipe(title:string, description:string, ingredients:string, categoriaID:string, authorID:string, photo:string) {
    
    const numberCategoria=Number(categoriaID)
    const numberAuthor=Number(authorID)
    const recipeExists = await prisma.recipe.findFirst({
      include: {
        categoria: true
      },
      where: {
        title: title
      },
    });
    if (recipeExists) {
      throw new Error(
        "Error 409. La receta que se intenta registrar, ya existe."
      );
    }
    const newRecipe = await prisma.recipe.create({
      data: {
        title: title,
        photo: photo,
        description: description as string,
        ingredients: ingredients,
        categoria: { connect: { id: numberCategoria } },
        author: { connect: { id: numberAuthor } }
      },
    });

    return newRecipe;
  };

  async updateRecipe(id: number, newData: Partial<iRecipeInfo>) {
    const { title, description, ingredients, categoriaID, authorID } = newData;

    const updatedRecipe = await prisma.recipe.update({
      where: { id },
      data: {
        title: title,
        description: description as string,
        ingredients: ingredients,
        categoria: { connect: { id: categoriaID } },
        author: { connect: { id: authorID } }
      },
    });

    return updatedRecipe;
  };

  async deleteRecipe(id: number) {
    const deletedRecipe = await prisma.recipe.delete({
      where: { id },
    });

    return deletedRecipe;
  };

};

export default RecipeServices;
