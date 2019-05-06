import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './Components/store/store.component';
import { ProductComponent } from './Components/product/product.component';
import { CartComponent } from './Components/cart/cart.component';

const routes: Routes = [
 { path: '', redirectTo: 'store', pathMatch: 'full'},
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'product', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
