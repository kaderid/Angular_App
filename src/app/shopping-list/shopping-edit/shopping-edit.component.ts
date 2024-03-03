import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef: ElementRef;
  

  onAddItem(){
    const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = this.nameInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    

  }
}
