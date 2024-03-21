import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseCardService {

  // add http client functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/ingredients";
  private recipeURL = "http://localhost:3000/recipes"

  // get all inventory items
  getAllInventory(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(`${this.baseURL}/`)
  }

  // Function to fetch ingredient data by ID
  fetchIngredientData(ingredientID: number): Observable<any> {
    const ingredientURL = `${this.baseURL}/${ingredientID}/get`;
    return this.http.get<any>(ingredientURL);
  }

  // get all inventory items
  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.recipeURL}/`)
  }

  // get all inventory items
  getSingleRecipe(recipeID: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.recipeURL + '/' + recipeID + '/' + 'get');
  }

  // Call craft functionality
  craftRecipe(recipeID: number, warehouseID: number) {
    const craftURL = this.recipeURL + '/' + recipeID + '/craft';

    this.getSingleRecipe(recipeID).subscribe((recipe: Recipe) => {
      console.log(recipe);
      const ingredientsNeeded: number[] = recipe.ingredientsNeeded.map(id => Number(id)); // Cast each element to number

      // Array to store objects containing ingredient information
      const ingredientsObjects: any[] = [];

      // Iterate over ingredientsNeeded array
      for (let k = 0; k < ingredientsNeeded.length; k++) {
        const ingredientID = ingredientsNeeded[k]; // Directly using the ingredientID

        // Make a call to fetch data using the ingredientID
        this.fetchIngredientData(ingredientID).subscribe((ingredientData: any) => {
          // Push fetched data into ingredientsObjects array as an object
          ingredientsObjects.push({
            data: ingredientData
          });

          // Check if all ingredients have been processed
          if (ingredientsObjects.length === ingredientsNeeded.length) {
            console.log("All ingredients fetched:", ingredientsObjects);
            // Now you can use ingredientsObjects array with all data fetched
          }
        });
      }

      console.log({ amount: 1, ingredients: ingredientsObjects, warehouseID: warehouseID });
      console.log(craftURL);
      return this.http.put<Recipe>(craftURL, { amount: 1, ingredients: ingredientsObjects, warehouseID: warehouseID });
    });
  }

}