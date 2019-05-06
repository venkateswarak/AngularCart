import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/ProductService';
import { Router, NavigationExtras } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FilterPipePipe } from './filter-pipe.pipe';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  pdtSvc: ProductsService;
    
  products: Observable<any>;
    private _router: Router;

    constructor( pdtSvc: ProductsService, router: Router) {
        this._router = router;
        this.pdtSvc = pdtSvc;
    }

    
    ngOnInit(): void {
      this.pdtSvc.getProducts().subscribe( data => {
        this.products = data;
    })
    }

    private moveCurrentTo(product){
        let navigationExtras: NavigationExtras = {
            queryParams: product
        };
        this._router.navigate(['/product'], navigationExtras);
    }


}
