import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { shoppingListRouting } from './shopping-list.routing';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        shoppingListRouting
    ],
    exports: [],
    providers: []
})
export class ShoppingListModule { }