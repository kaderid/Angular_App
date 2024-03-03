import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe(
          'Tasty Schnitzel',
         'A super-tasty Schnitzel - just awesome!',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
          ]),   
        new Recipe(
          'Big fat Burger',
         'What else you need to say?',
          'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
          [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
          ])   
    
      ];

      constructor(private slService: shoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

      }
}