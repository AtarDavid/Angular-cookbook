import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [new Recipe('Recipe name', 'This is a description', 'https://via.placeholder.com/50')];

    getRecipes() {
        return this.recipes.slice();
    }
}
