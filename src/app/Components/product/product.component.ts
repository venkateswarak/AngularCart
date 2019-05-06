import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    product: object;
    productnutrients: object;
  pdtSvc: ProductsService;
  

  private _router: Router;
  private _dvaCaption = [
      'Negligible',
      'Low',
      'Average',
      'Good',
      'Great'
  ];
  private _dvaRange = [
      'below 5%',
      'between 5 and 10%',
      'between 10 and 20%',
      'between 20 and 40%',
      'above 40%'
  ];

  constructor( pdtSvc: ProductsService, router: Router, private route: ActivatedRoute) {
      this._router = router;
      this.pdtSvc = pdtSvc;
      this.route.queryParams.subscribe(params => {
        this.product = params;
    });
      //this.product = this.pdtSvc.getProduct();
  }
  ngOnInit() {
  }
  backToStore() {
      window.location.href = '';
  }

  // Get the caption of the nutrients
  getDvaCaption(idx: number): any {
      if (idx < this._dvaCaption.length) {
          return this._dvaCaption[idx];
      } else {
          return undefined;
      }
  }

  // Get the range discription of the nutrients
  getDvaRange(idx: number): any {
      if (idx < this._dvaRange.length) {
          return this._dvaRange[idx];
      } else {
          return undefined;
      }
  }

}
