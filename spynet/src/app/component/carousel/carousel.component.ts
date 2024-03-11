import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  images = [
    { url: 'path/to/image1.jpg', alt: 'Image 1' },
    { url: 'path/to/image2.jpg', alt: 'Image 2' },
    { url: 'path/to/image3.jpg', alt: 'Image 3' },
  ];
}