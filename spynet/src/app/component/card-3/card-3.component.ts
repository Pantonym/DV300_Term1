import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { WarehouseCardService } from '../../services/warehouse-card.service';
import { Ingredients } from '../../models/ingredients.model';

@Component({
  selector: 'app-card-3',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-3.component.html',
  styleUrl: './card-3.component.css'
})
export class Card3Component {
  constructor(private service: WarehouseCardService) { };

  @Input() item: Ingredients = {
    id: 0,
    name: "NaN",
    totalWarehouse1: 0,
    totalWarehouse2: 0,
    totalWarehouse3: 0,
    totalAmount: 0,
    description: "NaN",
    image: "NaN"
  }
}
