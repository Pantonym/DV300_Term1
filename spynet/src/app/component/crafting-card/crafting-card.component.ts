import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-crafting-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './crafting-card.component.html',
  styleUrl: './crafting-card.component.css'
})
export class CraftingCardComponent {
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

}