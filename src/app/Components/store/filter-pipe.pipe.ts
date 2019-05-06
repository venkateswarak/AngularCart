import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(products: any, searchText: any): any {
    if(searchText == null) return products;

    return products.filter(function(products){
      return products.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }

}
