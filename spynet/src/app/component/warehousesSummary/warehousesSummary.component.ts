import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CardSummaryComponent } from '../card-summary/card-summary.component';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, CardSummaryComponent],
  templateUrl: './warehousesSummary.component.html',
  styleUrl: './warehousesSummary.component.css'
})
export class WarehousesSummaryComponent {
  constructor(private service: WarehouseCardService, private authService: AuthService, private router: Router) { }

  ingredientList: Ingredients[] = [];

  // initialise service data
  ngOnInit() {
    this.service.getAllIngredients().subscribe((data) => {
      this.ingredientList = data;
    });
  }

  callLogOut() {
    this.authService.logOut();
    this.router.navigateByUrl("/login");
  }
}
