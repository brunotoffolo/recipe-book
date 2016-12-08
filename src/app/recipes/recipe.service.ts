import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe("Hamburger",
              "Delicious hamburger recipe",
              "http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/6:4/w_620,h_413/the-ultimate-hamburger.jpg",
              [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 1)
              ]),
    new Recipe("Schnitzel",
              "Great if it is not made of pork",
              "http://kmetro.restaurantden.com/wp-content/uploads/sites/67/2016/03/dish_1.jpg",
              [
                new Ingredient('French fries', 2),
                new Ingredient('Chicken breast', 1)
              ]),
    new Recipe("Burrito",
              "Oh Mexico, how I miss your food...",
              "http://www.myburritobros.com/images/making-steak-burritos2.jpg",
              [
                new Ingredient('Rice', 1),
                new Ingredient('Beans', 1),
                new Ingredient('Meat', 2)
              ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    const index = this.recipes.indexOf(oldRecipe);
    this.recipes[index] = newRecipe;
  }
  
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://learning-firebase-a78f0.firebaseio.com/recipes.json', body, {headers: headers});
  }

  fetchData() {
    return this.http
               .get('https://learning-firebase-a78f0.firebaseio.com/recipes.json')
               .map((response: Response) => response.json())
               .subscribe(
                 (data: Recipe[]) => {
                   this.recipes = data;
                   this.recipesChanged.emit(this.recipes);
                 }
               );
  }

}
