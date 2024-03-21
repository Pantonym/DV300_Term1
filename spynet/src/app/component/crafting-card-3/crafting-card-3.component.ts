import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-crafting-card-3',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './crafting-card-3.component.html',
  styleUrl: './crafting-card-3.component.css'
})
export class CraftingCard3Component {
  constructor(private service: WarehouseCardService) { };

  @Input() recipeItem: Recipe = {
    id: 0,
    name: "NaN",
    description: "NaN",
    amountCrafted: 0,
    totalWarehouse1: 0,
    totalWarehouse2: 0,
    totalWarehouse3: 0,
    totalAmount: 0,
    ingredientsNeeded: [],
    isCraftable: false
  }

  // calls when clicking on craft
  craftNewRecipe(recipeID: number, warehouseID: number) {
    this.service.craftRecipe(recipeID, warehouseID);
  }
}
