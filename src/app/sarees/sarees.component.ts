import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarees',
  templateUrl: './sarees.component.html',
  styleUrls: ['./sarees.component.css']
})
export class SareesComponent implements OnInit {
  sarees = [
    {
      name: 'Kanchipattu Silk Saree',
      description: 'A beautiful Kanchipattu Silk Saree with beautiful border',
      price: 150.0,
      image: 'https://i.pinimg.com/236x/50/e8/5f/50e85fe0e5feb800d6f2eb1381492ddb.jpg'
    },
    {
      name: 'Gadwal Sarees',
      description: 'The royal silk of Gadwal',
      price: 200.0,
      image: 'https://i.pinimg.com/236x/0b/a0/e6/0ba0e6c4dd9ccc7a6cedbb500e9fba46.jpg'
    },
    {
      name: 'Gadwal Sarees',
      description: 'The royal silk of Gadwal',
      price: 200.0,
      image: 'https://i.pinimg.com/236x/0b/a0/e6/0ba0e6c4dd9ccc7a6cedbb500e9fba46.jpg'
    }
    // Add more sarees here
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(saree: any): void {
    console.log('Adding to cart:', saree);
    // Add your cart logic here
  }
}
