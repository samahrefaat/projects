import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:Product[]=[]
  userId:"59b3c7be-2c7b-7e48-651c-9c10e1ecabd5"
  brancheIds:"2f1172a9-1b5d-6fc4-777e-3e3b283cabde"
 
  numbers=[
    {number:"5" , viewValue: '5'},
    {number:"10" , viewValue: '10'},
    {number:"20" , viewValue: '20'},
    {number:"50" , viewValue: '50'},
    {number:"100" , viewValue: '100'},


  ]
  pageSizeOption = [1, 2, 4, 6, 12, 14];


  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this._getProducts();

  }
  private _getProducts() {
    this.productsService.getProducts(this.userId, this.brancheIds).subscribe((products) => {
      this.products = products;
      if (products) { console.log(products) }

    });
  } 

}
