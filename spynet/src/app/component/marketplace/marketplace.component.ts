import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { MarketplaceService } from '../../services/marketplace.service';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Ingredients } from '../../models/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marketplace',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})

export class MarketplaceComponent implements OnInit {
  // Service injection
  constructor(private marketplaceService: MarketplaceService, private authService: AuthService, private router: Router) { }

  ingredientList: Ingredients[] = [];
  warehouseId: number = parseInt(sessionStorage.getItem('warehouse') || '0');

  ngOnInit() {
    this.marketplaceService.getAllIngredients().subscribe((data: Ingredients[]) => {
      this.ingredientList = data;
    });
  }

  generateRandomNumber(): number {
    return Math.floor(Math.random() * 1000) + 1;
  }

  BuyIngredient(ingredientID: number) {
    const ingredientToUpdate = this.ingredientList.find(ingredient => ingredient.id === ingredientID);
    if (ingredientToUpdate) {

      if (this.warehouseId = 1) {
        ingredientToUpdate.totalWarehouse1 += 1;
        this.marketplaceService.updateIngredient(ingredientToUpdate).subscribe({
          next: (updatedIngredient) => {
            console.log('Ingredient updated successfully in Warehouse 1', updatedIngredient);
          },
          error: (error) => {
            console.error('Error updating ingredient in Warehouse 1:', error);
          }
        });
      }

      if (this.warehouseId = 2) {
        ingredientToUpdate.totalWarehouse2 += 1;
        this.marketplaceService.updateIngredient(ingredientToUpdate).subscribe({
          next: (updatedIngredient) => {
            console.log('Ingredient updated successfully in Warehouse 1', updatedIngredient);
          },
          error: (error) => {
            console.error('Error updating ingredient in Warehouse 1:', error);
          }
        });
      }

      if (this.warehouseId = 3) {
        ingredientToUpdate.totalWarehouse3 += 1;
        this.marketplaceService.updateIngredient(ingredientToUpdate).subscribe({
          next: (updatedIngredient) => {
            console.log('Ingredient updated successfully in Warehouse 1', updatedIngredient);
          },
          error: (error) => {
            console.error('Error updating ingredient in Warehouse 1:', error);
          }
        });
      }

    }
  }
}