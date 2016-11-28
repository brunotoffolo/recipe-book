import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  // TODO Improve later
  @Output() recipeSelected = new EventEmitter<Recipe>();

  // TODO Replace with real recipe list
  recipe = new Recipe("Hamburger",
              "Delicious hamburger recipe",
              "http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620,h_413/the-ultimate-hamburger.jpg");

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
