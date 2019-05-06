import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './Components/store/store.component';
import { CartComponent } from './Components/cart/cart.component';
import { ProductComponent } from './Components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/ProductService';
import { CheckoutService } from './services/CheckoutService';
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './Components/store/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    CartComponent,
    ProductComponent,
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService, CheckoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
