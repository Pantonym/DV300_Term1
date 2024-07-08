import { MarketplaceService } from '../../services/marketplace.service';
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

  async buyIngredient(ingredientId: number, warehouseNumber: number) {
    try {
      // TODO: Update total amount to reflect new total
      this.marketplaceService.updateIngredient(ingredientId, warehouseNumber).subscribe((data) => {
        console.log(data + " has been bought");
      })

    } catch (error) {
      console.error('Error buying ingredient:', error);
    }
  }

}