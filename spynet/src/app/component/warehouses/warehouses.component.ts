import { Component, inject } from '@angular/core';
import { WarehouseCardComponent } from '../warehouse-card/warehouse-card.component';
import { CommonModule } from '@angular/common';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { Card2Component } from '../card-2/card-2.component';
import { Card3Component } from '../card-3/card-3.component';
import { CraftingCardComponent } from '../crafting-card/crafting-card.component';
import { Recipe } from '../../models/recipe.model';
import { CraftingCard2Component } from '../crafting-card-2/crafting-card-2.component';
import { CraftingCard3Component } from '../crafting-card-3/crafting-card-3.component';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [WarehouseCardComponent, Card2Component, Card3Component, CommonModule, RouterLink, RouterLinkActive, CraftingCardComponent, CraftingCard2Component, CraftingCard3Component],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehousesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  public warehouseID = 1;

  // we are injecting our service functionality into this file
  constructor(private service: WarehouseCardService) {
    this.warehouseID = Number(this.route.snapshot.params['id'])
  }

  // Example of an array, but specifying that the objects should follow the inventory model
  ingredientList: Ingredients[] = [];
  recipeList: Recipe[] = [];

  // initialise service data
  ngOnInit() {
    this.service.getAllInventory().subscribe((data) => {
      this.ingredientList = data;
    })

    this.service.getAllRecipes().subscribe((data) => {
      this.recipeList = data;
    })
  }

  // warehouse change functions
  warehouseChange1() {
    this.warehouseID = 1;
  }

  warehouseChange2() {
    this.warehouseID = 2;
  }

  warehouseChange3() {
    this.warehouseID = 3;
  }
}
