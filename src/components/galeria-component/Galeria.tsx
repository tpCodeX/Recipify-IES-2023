import { LoadRecipe } from "./LoadRecipe";


const Galeria = async ()=> { //recipe:string):void
  const recipe = await LoadRecipe();

  return;
  <section className="galeria-section">
    {recipe.map((recipe) => (
      <div key={recipe.id}>
        <h3>{recipe.title}</h3>
        <p>{recipe.description}</p>
      </div>
    ))}
  </section>;
}
export default Galeria;
