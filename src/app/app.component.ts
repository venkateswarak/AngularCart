import { Component, Inject } from '@angular/core';
import { ProductsService } from './services/ProductService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _pdtSvc: ProductsService;

  constructor( pdtSvc: ProductsService) {
      this._pdtSvc = pdtSvc;
  }
}
