import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  accessories = [
    {
      name: 'Leather Belt',
      description: 'A stylish leather belt.',
      price: 30.0,
      image: 'path_to_image_1'
    },
    {
      name: 'Silk Scarf',
      description: 'A beautiful silk scarf.',
      price: 50.0,
      image: 'path_to_image_2'
    }
    // Add more accessories here
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(accessory: any): void {
    console.log('Adding to cart:', accessory);
 // Add your cart logic here
}
}

