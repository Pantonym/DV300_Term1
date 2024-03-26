import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseCardService {

  // add http client functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/ingredients";
  private recipeURL = "http://localhost:3000/recipes";

  // get all ingredient items
  getAllIngredients(): Observable<Ingredients[]> {
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
  craftRecipe(recipeID: number, arrIngredients: any, warehouseID: number) {
    const craftURL = this.recipeURL + '/' + recipeID + '/craft';

    console.log({ amount: 1, ingredients: arrIngredients, warehouse: warehouseID })

    // it will either return the recipe, or something else (an error message)
    return this.http.put<Recipe | any>(craftURL, { amount: 1, ingredients: arrIngredients, warehouse: warehouseID })
    .pipe(
      catchError(error => {
        return throwError(error);
      })
    )
  };

}