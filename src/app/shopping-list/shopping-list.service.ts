import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class shoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
      ];

      getIngredients(){
        return this.ingredients.slice();
      }

      AddIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());

      }

      addIngredients(ingredients: Ingredient[]){
        //for (let ingredient of ingredients){
         //   this.AddIngredient(ingredient);
       // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());

      }


}