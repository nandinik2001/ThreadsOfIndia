// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { JewelryItem } from './jewelry-item';


// @Component({
//   selector: 'app-jewelry',
//   templateUrl: './jewelry.component.html',
//   styleUrls: ['./jewelry.component.css']
// })
// export class JewelryComponent implements OnInit {
//   jewelries = [
//     {
//       name: 'Temple Jewelry Long Necklace',
//       description: 'A beautiful gold necklace.',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/11/2e/54/112e547f8fc76f473cba7ccab9da5839.jpg'
//     },
//     {
//       name: 'Temple Jewelry Bangles',
//       description: 'Sparkling Bangles.',
//       price: 200.0,
//       image: 'https://i.pinimg.com/736x/40/ec/93/40ec93a1f089b1c653542b8e419ec026.jpg'
//     },
//     {
//       name: 'Temple Jewelry earrings',
//       description: 'Beautiful Buttalu',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/da/6b/9c/da6b9c9aba792d8a67d79dd7024e8017.jpg'
//     },
//     {
//       name: 'Antique haaram',
//       description: 'Magestic Piece of Gold',
//       price: 200.0,
//       image: 'https://i.pinimg.com/236x/d0/ba/f3/d0baf341d58467066b9fe6d5476afd40.jpg'
//     },
//     {
//       name: 'Antique bangles',
//       description: 'Beauty on your writsts',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/7f/38/0c/7f380cce1086d12b79e8ca8d5acd73e9.jpg'
//     },
//     {
//       name: 'Antique earrings',
//       description: 'when your ears dangle with joy',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/c5/a4/db/c5a4db1bf38b049d2c7095a3a1ea99b1.jpg'
//     },
//     {
//       name: 'Aravanki',
//      description: 'Bajubandh',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/43/14/a6/4314a67b54bd58a7bcb382aa56560c2b.jpg'
//     },
//     {
//       name: 'nose ring',
//       description: 'nose ring gold',
//       price: 100.0,
//       image: 'https://i.pinimg.com/236x/83/32/1e/83321ef5c8fc3dc860e3b730fedf1cf8.jpg'
//     },
  
    
//   ];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//   }
//   addToCart(jewelry: JewelryItem): void {
//        this.cartService.addItem(jewelry).subscribe(() => {
//          console.log('Added to cart:', jewelry);
//        });
  
   
//   }
// }







// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { JewelryItem } from './jewelry-item';

// @Component({
//   selector: 'app-jewelry',
//   templateUrl: './jewelry.component.html',
//   styleUrls: ['./jewelry.component.css']
// })
// export class JewelryComponent implements OnInit {
//   jewelries: JewelryItem[] = [
//     {
//       name: 'Temple Jewelry Long Necklace',
//       description: 'A beautiful gold necklace.',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/11/2e/54/112e547f8fc76f473cba7ccab9da5839.jpg'
//     },
//     {
//       name: 'Temple Jewelry Bangles',
//       description: 'Sparkling Bangles.',
//       price: 200.0,
//       image: 'https://i.pinimg.com/736x/40/ec/93/40ec93a1f089b1c653542b8e419ec026.jpg'
//     },
//     {
//       name: 'Temple Jewelry earrings',
//       description: 'Beautiful Buttalu',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/da/6b/9c/da6b9c9aba792d8a67d79dd7024e8017.jpg'
//     },
//     {
//       name: 'Antique haaram',
//       description: 'Magestic Piece of Gold',
//       price: 200.0,
//       image: 'https://i.pinimg.com/236x/d0/ba/f3/d0baf341d58467066b9fe6d5476afd40.jpg'
//     },
//     {
//       name: 'Antique bangles',
//       description: 'Beauty on your writsts',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/7f/38/0c/7f380cce1086d12b79e8ca8d5acd73e9.jpg'
//     },
//     {
//       name: 'Antique earrings',
//       description: 'when your ears dangle with joy',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/c5/a4/db/c5a4db1bf38b049d2c7095a3a1ea99b1.jpg'
//     },
//     {
//       name: 'Aravanki',
//       description: 'Bajubandh',
//       price: 150.0,
//       image: 'https://i.pinimg.com/236x/43/14/a6/4314a67b54bd58a7bcb382aa56560c2b.jpg'
//     },
//     {
//       name: 'nose ring',
//       description: 'nose ring gold',
//       price: 100.0,
//       image: 'https://i.pinimg.com/236x/83/32/1e/83321ef5c8fc3dc860e3b730fedf1cf8.jpg'
//     }
   
//   ];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void { }

//   addToCart(jewelry: JewelryItem): void {
//     this.cartService.addItem(jewelry).subscribe(() => {
//       console.log('Added to cart:', jewelry);
//     });
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-jewelry',
  templateUrl: './jewelry.component.html',
  styleUrls: ['./jewelry.component.css']
})
export class JewelryComponent implements OnInit {
  jewelries = [
    {
      name: 'Temple Jewelry Long Necklace',
      description: 'A beautiful gold necklace.',
      price: 150.0,
      image: 'https://i.pinimg.com/236x/11/2e/54/112e547f8fc76f473cba7ccab9da5839.jpg'
    },
    // Add more items here
  ];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCart(jewelry: any): void {
    this.cartService.addCartItem(jewelry).subscribe(response => {
      console.log('Item added to cart:', response);
    });
  }
}
