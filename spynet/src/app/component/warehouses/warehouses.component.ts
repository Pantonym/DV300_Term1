import { Component } from '@angular/core';
import { WarehouseCardComponent } from '../warehouse-card/warehouse-card.component';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';
import { CarouselModule } from '@coreui/angular';
import { CarouselComponent } from '../carousel/carousel.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [CommonModule, WarehouseCardComponent, CarouselModule, CarouselComponent],
  templateUrl: './warehouses.component.html',
  styleUrl: './warehouses.component.css'
})
export class WarehousesComponent {
  // images for the carousel
  images = [
    { url: 'path/to/image1.jpg', alt: 'Image 1' },
    { url: 'path/to/image2.jpg', alt: 'Image 2' },
    { url: 'path/to/image3.jpg', alt: 'Image 3' },
  ];
  
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
