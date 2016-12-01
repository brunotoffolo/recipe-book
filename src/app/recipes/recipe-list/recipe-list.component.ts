import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // TODO Improve later
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
  }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
