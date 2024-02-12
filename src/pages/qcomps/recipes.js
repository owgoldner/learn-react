export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

function getIngredientList(recipe) {
  const listItems = [...recipe.ingredients].map((ingredient) =>
    <li key={recipe.id + "-" + ingredient}>{ingredient}</li>);
  return <ul>{listItems}</ul>;
}

export default function RecipeList() {
  const ul = recipes.map((recipe) =>
    (<div key={recipe.id}>
      <h3>{recipe.name}</h3>
      {getIngredientList(recipe)} 
    </div>)
  );
  return (
    <div>
      <h1>Recipes</h1>
      {ul}
    </div>
  );
}