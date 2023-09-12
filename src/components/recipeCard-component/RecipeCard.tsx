import './RecipeCard.css'
import { iRecipeInfo } from "@/interfaces/recipeInterfaces"

const RecipeCard=({recipeInfo}:{recipeInfo:iRecipeInfo})=>{

    return (
        <div className="recipe-card-item">
            <img className="recipe-card-photo" src={recipeInfo.photo} alt="fotitoxD" />
            <div className="recipe-card-info">
            <h2 className="recipe-card-title">{recipeInfo.title}</h2>
            <p className="recipe-card-category">{recipeInfo.categoria}</p>
            </div>
        </div>
    )
}

export default RecipeCard