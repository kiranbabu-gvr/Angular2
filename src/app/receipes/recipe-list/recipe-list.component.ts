import { Component, OnInit, Output,  EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeEventWasClicked= new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  recipes: Recipe[]= [
    new Recipe('A Test Recipe','Test Desc','./assets/recipe1.jpg'),
    new Recipe('Another Test Recipe','Test Desc','./assets/recipe1.jpg')
  ];

  onRecipeItemWasClicked(recipe: Recipe){
    this.recipeEventWasClicked.emit(recipe);
  }

}
