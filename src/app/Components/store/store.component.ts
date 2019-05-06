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
    toFilter: any;

    private _filter: string;
    private _filterFunction: any;
    private _router: Router;

    constructor( pdtSvc: ProductsService, router: Router) {
        this._router = router;
        this.pdtSvc = pdtSvc;
        
        this._filterFunction = this.filterFunction.bind(this);
    }

    
    ngOnInit(): void {
      this.pdtSvc.getProducts().subscribe( data => {
        this.products = data;
    })
    }

    get filter(): string {
        return this._filter;
    }
    set filter(value: string) {
        this._filter = value;
        if (this.toFilter) {
            clearTimeout(this.toFilter);
        }
        this.toFilter = setTimeout(() => {
            this.toFilter = null;
            var cv = this.products;
            // if (cv) {
            //     if (cv.filter != this._filterFunction) {
            //         cv.filter = this._filterFunction;
            //     } 
            // }
        }, 500);
    }
    private moveCurrentTo(product){
        let navigationExtras: NavigationExtras = {
            queryParams: product
        };
        this._router.navigate(['/product'], navigationExtras);
    }
    // define filter function for collectionview
    private filterFunction(item) {
        var filter = this._filter;

        if (filter && item) {
            var value = item['name'];
            if (value.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
                return true;
            }
            return false;
        }

        return true;
    };

}
