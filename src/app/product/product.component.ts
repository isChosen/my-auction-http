import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<any>;
  products2: Observable<any>;

  myHeaders: Headers;

  constructor(private http: Http, /*private myHeaders: Headers*/) {
      this.myHeaders = new Headers(); // 此处不能用依赖注入
      this.myHeaders.append('chosen', 'This my customized header!!!');
    }

  ngOnInit() {
    // subscribe
    this.http.get('api/products', {headers: this.myHeaders})
        .map(res => {
          return res.json();
        })
        .subscribe(
          data => {
            console.log('data: ', data);
            this.products = data;
          }
        );
    // async pipe
    this.products2 = this.http.get('api/products')
        .map(res => {
          return res.json();
        });
  }

}
