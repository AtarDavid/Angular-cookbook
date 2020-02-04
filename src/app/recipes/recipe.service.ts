import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [new Recipe('Recipe name', 'This is a description', 'https://via.placeholder.com/50', [
        new Ingredient('Flour', 2),
        new Ingredient('Other ingredient', 1)
    ]
    )];

    constructor(private shopppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToList(ingredients: Ingredient[]) {
        this.shopppingListService.addRecipeIngredients(ingredients);
    }
}
