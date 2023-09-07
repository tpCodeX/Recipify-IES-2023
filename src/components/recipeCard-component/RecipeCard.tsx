interface iRecipeInfo {
        id: number,
        photo:string,
        title: string,
        description:string,
        ingredients: string,
        author: string,
        authorID: number,
        createdAt: string,
        updatedAt:  string,
        categoria: string,
        categoriaID: number
}


const RecipeCard=(className:string,recipeInfo:iRecipeInfo)=>{
    return (
        <div className={className + ' recipe-card'}>
            <img className="recipe-card-photo" src={recipeInfo.photo} alt="fotitoxD" />
            <h2 className="recipe-card-title">{recipeInfo.title}</h2>
            <p className="recipe-card-category">{recipeInfo.categoria}</p>
        </div>
    )
}