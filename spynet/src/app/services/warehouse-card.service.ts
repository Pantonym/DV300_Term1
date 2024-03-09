import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredients } from '../models/ingredients.model';

@Injectable({
  providedIn: 'root'
})
export class WarehouseCardService {

  // add http client functionality to this service
  constructor(private http: HttpClient) { }

  private baseURL = "http://localhost:3000/ingredients";

  // get all inventory items
  getAllInventory(): Observable<Ingredients[]> {
    return this.http.get<Ingredients[]>(`${this.baseURL}/`)
  }

}
