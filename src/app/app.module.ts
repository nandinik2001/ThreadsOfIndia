// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
// import { HomepageComponent } from './homepage/homepage.component';
// import { SareesComponent } from './sarees/sarees.component';
// import { JewelryComponent } from './jewelry/jewelry.component';
// import { AccessoriesComponent } from './accessories/accessories.component';
// import { CartComponent } from './cart/cart.component';
// import { CheckoutComponent } from './checkout/checkout.component';
// import { HeaderComponent } from './header/header.component';
// import { CartService } from './cart.service';

// @NgModule({
//   declarations: [
//     AppComponent,
//     SignupComponent,
//     LoginComponent,
//     HomepageComponent,
//     SareesComponent,
//     JewelryComponent,
//     AccessoriesComponent,
//     CartComponent,
//     CheckoutComponent,
//     HeaderComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [
//     CartService
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SareesComponent } from './sarees/sarees.component';
import { JewelryComponent } from './jewelry/jewelry.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { CartService } from './cart.service'; // Correct import path
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomepageComponent,
    SareesComponent,
    JewelryComponent,
    AccessoriesComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [
    CartService // Provide CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

