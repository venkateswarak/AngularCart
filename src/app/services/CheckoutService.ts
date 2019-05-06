'use strict';
import { Injectable } from '@angular/core';
declare var $: any;

// Common data service
@Injectable()
export class CheckoutService {

    checkout(serviceName, merchantID, cartItems) {
        if (serviceName === 'PayPal') {
            this.checkoutPayPal(merchantID, cartItems);
        } else {
            throw 'Unknown checkout service: ' + serviceName;
        }
    }

    private checkoutPayPal(merchantID, cartItems) {
        // global data
        var data = {
            cmd: '_cart',
            business: merchantID,
            upload: '1',
            rm: '2',
            charset: 'utf-8'
        };

        // item data
        for (var i = 0; i < cartItems.length; i++) {
            var item = cartItems[i];
            var ctr = i + 1;
            data['item_number_' + ctr] = item.sku;
            data['item_name_' + ctr] = item.name;
            data['quantity_' + ctr] = item.quantity;
            data['amount_' + ctr] = item.price.toFixed(2);
        }

        // build form
       var form = document.createElement('form');
        form.setAttribute('action', 'https://www.paypal.com/cgi-bin/webscr');
        form.setAttribute('method', 'POST');
        form.setAttribute('style', 'display:none;');
        this.addFormFields(form, data);
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    };


    private addFormFields(form, data) {
        if (data != null) {
            for (var name in data) {
                if (data.hasOwnProperty(name)) {
                    var input = document.createElement('input');
                    input.setAttribute('type', 'hidden');
                    input.setAttribute('name', name);
                    input.setAttribute('value', data[name]);
                    form.appendChild(input);
                }
            }
        }
    };
}