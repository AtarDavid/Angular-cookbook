import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [new Recipe('Recipe name', 'This is a description', 'https://via.placeholder.com/50')];

    getRecipes() {
        return this.recipes.slice();
    }
}
