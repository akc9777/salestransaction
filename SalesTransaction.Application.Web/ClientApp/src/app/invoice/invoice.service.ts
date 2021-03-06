import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from 'src/core/services/web-api.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private api: WebApiService) { }

  addInvoice(json: any): Observable<any> {
    var jsonnew = JSON.stringify(json); 
    console.log('new');
    console.log(jsonnew.substring(1,jsonnew.length-1));
    return this.api.post('invoice/addinvoice', jsonnew.substring(1,jsonnew.length-1));
  }

  getAllInvoice() {
    return this.api.get('invoice/getallinvoice');
  }

  getInvoiceSales(json: any): Observable<any> {
    var parameter = '{"invoiceId":'+ json +'}';
    return this.api.get('invoice/getinvoice', new HttpParams().set('json', parameter));
  }
}
