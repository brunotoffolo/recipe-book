import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient';

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingredient[]) {
    Array.prototype.push.apply(this.items, items);
  }

  addItem(item: Ingredient) {
    this.items.push(item);
  }

  editItem(oldItem: Ingredient, newItem: Ingredient) {
    const index = this.items.indexOf(oldItem);
    this.items[index] = newItem;
  }

  deleteItem(item: Ingredient) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

}
