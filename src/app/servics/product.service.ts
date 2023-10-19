import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpclient: HttpClient) { }
  getUrl = "http://localhost:5000/product/viewall"
  public getProduct() {
    return this.httpclient.get(this.getUrl)
  }
}
