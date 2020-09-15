import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {

  @Input() recipe: Recipe;
  @Output() recipeSelected= new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(){
    this.recipeSelected.emit();
  }
}
