import { EventEmitter, Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/Rx';

import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';

@Injectable()
export class RecipeService {
  recipesChanged = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [];
  private recipesInitialized: boolean = false;

  constructor(private http: Http) { }

  getRecipes() {
    if (!this.recipesInitialized) {
      this.fetchData();
      this.recipesInitialized = true;
    }
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
                   console.log(data);
                 }
               );
  }

}
