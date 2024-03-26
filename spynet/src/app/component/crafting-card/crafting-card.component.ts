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

  async getIngredients(ingredientsNeeded: number[]) {
    // Array to store objects containing ingredient information
    const ingredientsObjects: any[] = [];

    // Array to store promises of fetching ingredient data
    const fetchPromises: Promise<void>[] = [];

    // Iterate over ingredientsNeeded array
    for (let k = 0; k < ingredientsNeeded.length; k++) {
      const ingredientID = ingredientsNeeded[k]; // Directly using the ingredientID

      // Push the promise of fetching data using the ingredientID
      fetchPromises.push(
        new Promise<void>((resolve, reject) => {
          // Make a call to fetch data using the ingredientID
          this.service.fetchIngredientData(ingredientID).subscribe((ingredientData: any) => {
            // Push fetched data into ingredientsObjects array as an object
            ingredientsObjects.push({ data: ingredientData });
            resolve(); // Resolve the promise
          }, error => {
            reject(error); // Reject the promise if there's an error
          });
        })
      );
    }

    // Wait for all ingredient fetch promises to resolve
    await Promise.all(fetchPromises);

    return ingredientsObjects;
  }

  // calls when clicking on craft
  craftNewRecipe(recipeID: number, warehouseID: number) {

    this.service.getSingleRecipe(recipeID).subscribe(async (recipe: Recipe) => {
      console.log(recipe);

      const ingredientsNeeded: number[] = recipe.ingredientsNeeded.map(id => Number(id)); // Cast each element to number

      const ingredientsObject = await this.getIngredients(ingredientsNeeded);

      this.service.craftRecipe(recipeID, ingredientsObject, warehouseID).subscribe(
        (data) => {
          // Handle successful response here
          this.recipeItem.isCraftable = true;
          window.location.reload();
        },
        (error) => {
          // Handle error response here
          console.log(error); // Log the error
          this.recipeItem.isCraftable = false; // Set isCraftable to false
        }
      );

    }

    )
  };

}