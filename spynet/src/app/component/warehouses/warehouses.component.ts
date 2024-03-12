import { Component, inject } from '@angular/core';
import { WarehouseCardComponent } from '../warehouse-card/warehouse-card.component';
import { CommonModule } from '@angular/common';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [WarehouseCardComponent, CommonModule],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehousesComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  warehouseID = 0;

  // we are injecting our service functionality into this file
  constructor(private service: WarehouseCardService) {
    this.warehouseID = Number(this.route.snapshot.params['id'])
  }

  // Example of an array, but specifying that the objects should follow the inventory model
  ingredientList: Ingredients[] = [];

  // initialise service data
  ngOnInit() {
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.ingredientList = data;
    })
  }

  // TODO: Variable of navbar id to render different warehouses
  // TODO: Components for each warehouse that can be ngIf'ed to change on the main page component
}
