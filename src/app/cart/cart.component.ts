
// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items: any[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit() {
//     this.cartService.items$.subscribe(cartItems => {
//       this.items = cartItems;
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { JewelryItem } from '../jewelry/jewelry-item';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items: JewelryItem[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.cartService.cart$.subscribe((items: JewelryItem[]) => {
//       this.items = items;
//     });
//   }

//   clearCart(): void {
//     this.cartService.clearCart();
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { JewelryItem } from '../jewelry/jewelry-item';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items: JewelryItem[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.cartService.cart$.subscribe((items: JewelryItem[]) => {
//       console.log('Cart items:', items); 
//       this.items = items;
//     });
//   }

//   clearCart(): void {
//     this.cartService.clearCart();
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CartService } from '../cart.service';
// import { JewelryItem } from '../jewelry/jewelry-item';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items: JewelryItem[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
    
//     this.cartService.cart$.subscribe((items: JewelryItem[]) => {
//       console.log('Cart items:', items); 
//       this.items = items; 
//     });
//   }

//   clearCart(): void {
    
//     console.log('Clearing cart');
//     this.cartService.clearCart();
//   }
// }


// import { Component, OnInit } from '@angular/core';
// import { CartService, CartItem } from '../cart.service';

// @Component({
//   selector: 'app-cart',
//   templateUrl: './cart.component.html',
//   styleUrls: ['./cart.component.css']
// })
// export class CartComponent implements OnInit {
//   items: CartItem[] = [];

//   constructor(private cartService: CartService) { }

//   ngOnInit(): void {
//     this.loadCartItems();
//   }

//   loadCartItems(): void {
//     this.cartService.getItems().subscribe(items => {
//       this.items = items;
//       console.log('Cart items:', items);
//     });
//   }

//   clearCart(): void {
//     this.cartService.clearCart().subscribe(() => {
//       this.items = [];
//       console.log('Cart cleared'); 
//     });
//   }
// }



import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  loadCartItems(): void {
    this.cartService.getCartItems().subscribe(items => {
      this.items = items;
    });
  }
}
