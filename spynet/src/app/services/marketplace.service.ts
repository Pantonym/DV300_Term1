import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/ingredients.model' // Adjust path as necessary

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
  private baseURL = "http://localhost:3000/ingredients";

  constructor(private http: HttpClient) { }

  // get all ingredient items
  getAllIngredients(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(`${this.baseURL}/`)
  }

  // Function to fetch ingredient data by ID
  fetchIngredientData(ingredientID: number): Observable<any> {
    const ingredientURL = `${this.baseURL}/${ingredientID}/get`;
    return this.http.get<any>(ingredientURL);
  }

  // function to update the ingredients
  updateIngredient(ingredientId: number, warehouseId: number): Observable<Ingredients> {
    return this.http.put<Ingredients>(`${this.baseURL}/${ingredientId}/buy`, {warehouse: warehouseId});
  }
  
}