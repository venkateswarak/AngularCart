import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/ProductService';
import { CheckoutService } from 'src/app/services/CheckoutService';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private _router: Router;
    pdtSvc: ProductsService;
    cktSvc: CheckoutService;
    constructor( pdtSvc: ProductsService, cktSvc: CheckoutService, router: Router) {
        this._router = router;
        this.pdtSvc = pdtSvc;
        this.cktSvc = cktSvc;
    }

    backToStore() {
        window.location.href = '';
    }

    // checkout the shopping cart.
   checkout(serviceName: string) {
        var merchantID: string;
        if (serviceName === 'PayPal') {
            merchantID = 'kothav4@gmail.com';
        } else {
            throw 'Unknown checkout service: ' + serviceName;
        }
        this.cktSvc.checkout(serviceName, merchantID, this.pdtSvc.cartItems);
        this.pdtSvc.clearCart = true;
    };

    quantityChanged(item: any) {
        if (item.quantity > 0) {
            return;
        }
        var idx = this.pdtSvc.cartItems.indexOf(item);
        this.pdtSvc.cartItems.splice(idx,1);
    }

  ngOnInit() {
  }

}

