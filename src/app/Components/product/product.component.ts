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
  pdtSvc: ProductsService;
  

  private router: Router;


  constructor( pdtSvc: ProductsService, router: Router, private route: ActivatedRoute) {
      this.router = router;
      this.pdtSvc = pdtSvc;
      let selectedProduct = localStorage != null ? localStorage['product'] : null;
        if (selectedProduct != null && JSON != null) {
                this.product = JSON.parse(selectedProduct);
            
        }
  }
  ngOnInit() {
  }
  backToStore() {
      window.location.href = '';
  }

}
