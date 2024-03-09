import { Component } from '@angular/core';
import { WarehouseCardComponent } from '../warehouse-card/warehouse-card.component';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [WarehouseCardComponent],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehousesComponent {
  // we are injecting our service functionality into this file
  constructor(private service: WarehouseCardService) { }

  // Example of an array, but specifying that the objects should follow the inventory model
  inventoryList: Ingredients[] = [];

  // initialise service data
  ngOnInit() {
    this.service.getAllInventory().subscribe((data) => {
      console.log(data);
      this.inventoryList = data;
    })
  }
}
