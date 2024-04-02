import { MarketplaceService } from '../../services/marketplace.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Ingredients } from '../../models/ingredients.model';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-marketplace-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marketplace-admin.component.html',
  styleUrl: './marketplace-admin.component.css'
})
export class MarketplaceAdminComponent implements OnInit {
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
      this.marketplaceService.updateIngredient(ingredientId, warehouseNumber).subscribe((data) => {
        console.log(data + " has been bought");
      })

    } catch (error) {
      console.error('Error buying ingredient:', error);
    }
  }

  createIngredient(ingredientName: string) {
    try {
      this.marketplaceService.createIngredient(ingredientName).subscribe((data) => {
        console.log(data + " has been created");
      })

    } catch (error) {
      console.error('Error creating ingredient: ', error);
    }
  } 

}
