

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private itemsSubject = new BehaviorSubject<any[]>([]);
//   items$ = this.itemsSubject.asObservable();
//   cart$: any;

//   constructor() { }

//   addToCart(item: any) {
//     const currentItems = this.itemsSubject.value;
//     this.itemsSubject.next([...currentItems, item]);
//     console.log('Item added to cart:', item);
//   }

//   getItems() {
//     return this.itemsSubject.value;
//   }

//   clearCart() {
//     this.itemsSubject.next([]);
//     return this.itemsSubject.value;
//   }
// }


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { JewelryItem } from './jewelry/jewelry-item'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private items: JewelryItem[] = [];
//   private cartSubject = new BehaviorSubject<JewelryItem[]>(this.items);

//   cart$ = this.cartSubject.asObservable();

//   constructor() { }

//   addToCart(item: JewelryItem): void {
//     this.items.push(item);
//     this.cartSubject.next(this.items);
//   }

//   getItems(): JewelryItem[] {
//     return this.items;
//   }

//   clearCart(): JewelryItem[] {
//     this.items = [];
//     this.cartSubject.next(this.items);
//     return this.items;
//   }
// }


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl = 'http://localhost:8080/api/cart-items'; // Your Spring Boot API URL

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addCartItem(item: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, item);
  }

  updateCartItem(id: number, item: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteCartItem(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}

